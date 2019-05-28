/**
 *
 * Mail Us widget
 *
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/Input';
import TextArea from 'components/TextArea';

const ComponentWrapper = styled.form`
  width: 50vw;
  display: flex;
  padding: 30px;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  margin: 10px 0px;
`;

const ComponentFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;

const ComponentFooterLefttWrapper = styled.div``;

const AttachFilesButton = styled.div`
  color: #47789e;
  cursor: pointer;
`;
const AttachFilesIcon = styled.i`
  margin: 0 5px;
`;

const AttachFilesInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
const AttachFilesInputLabel = styled.label``;
const AttachButtonText = styled.span``;
const ComponentFooterRightWrapper = styled.div``;

const SubmitButton = styled.button`
  background: #45749b;
  color: #fff;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 4px;
`;

const AttachmentsList = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
  margin: 10px 0px;
`;

const AttachmentItem = styled.li`
  display: flex;
  justify-content: space-between;
  color: #47789e;
  padding: 5px 0px;
  align-items: center;
  span {
    font-size: 12px;
    font-weight: bold;
  }
  i {
    margin: 0 5px;
    font-size: 10px;
  }
`;

export default class MailUsWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formObj: {
        toAddress: 'support@recruiterbox.com',
      },
      attachments: [],
    };
  }

  onFormChange = (e, key) => {
    const { formObj } = this.state;
    this.setState({
      formObj: { ...formObj, ...{ [key]: e.target.value } },
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { formObj, attachments } = this.state;
    const formKeys = Object.keys(formObj);
    if (formObj.subject && formObj.message) {
      localStorage.setItem('formResponse', JSON.stringify(formObj));
      console.log(localStorage.getItem('formResponse')); //eslint-disable-line
      const MailFormData = new FormData();
      formKeys.map(key => {
        MailFormData.append(key, formObj[key]);
        return key;
      });
      attachments.map((documentItem, index) => {
        if (documentItem.file) {
          MailFormData.append(`attachement[${index}][file]`, documentItem.file);
        }
        return documentItem;
      });
    } else {
      alert('Please Fill all the fields'); //eslint-disable-line
    }
  };

  handleInputFileChange(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const { attachments } = this.state;
    if (file) {
      this.setState({
        attachments: attachments.concat([{ file }]),
      });
    }
  }

  render() {
    const { formObj, attachments } = this.state;
    return (
      <ComponentWrapper
        encType="multipart/form-data"
        onSubmit={e => this.onFormSubmit(e)}
      >
        <InputWrapper>
          <Input
            options={{
              disabled: true,
              value: formObj.toAddress,
              showLabel: true,
              label: <div>To</div>,
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            onChange={e => this.onFormChange(e, 'subject')}
            options={{
              value: formObj.subject,
              placeholder: 'Subject',
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <TextArea
            options={{
              value: formObj.message,
              placeholder: 'Message...',
            }}
            onChange={e => this.onFormChange(e, 'message')}
          />
        </InputWrapper>
        <ComponentFooterWrapper>
          <ComponentFooterLefttWrapper>
            <AttachFilesButton>
              <AttachFilesInput
                id="attach-mail"
                type="file"
                onChange={e => this.handleInputFileChange(e)}
              />
              <AttachFilesInputLabel htmlFor="attach-mail">
                <AttachFilesIcon className="fas fa-paperclip" />
                <AttachButtonText>Attach Files</AttachButtonText>
              </AttachFilesInputLabel>
            </AttachFilesButton>
            {attachments && attachments.length ? (
              <AttachmentsList>
                {attachments.map(item => (
                  <AttachmentItem key={item.file.name}>
                    <span>{item.file.name}</span>
                    <i className="fas fa-times" />
                  </AttachmentItem>
                ))}
              </AttachmentsList>
            ) : null}
          </ComponentFooterLefttWrapper>
          <ComponentFooterRightWrapper>
            <SubmitButton type="submit">Send Mail</SubmitButton>
          </ComponentFooterRightWrapper>
        </ComponentFooterWrapper>
      </ComponentWrapper>
    );
  }
}

MailUsWidget.propTypes = {};
