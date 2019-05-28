/**
 *
 * Chat With Us widget
 *
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextArea from 'components/TextArea';

const ComponentWrapper = styled.form`
  width: 50vw;
  height: 340px;
  padding: 10px;
  position: relative;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-flow: column;
  border-radius: 10px 10px 0 0;
  background: white;
  bottom: 0;
  transition: 0.1s ease-out;
`;

const InputWrapper = styled.div`
  margin: 10px 0px;
`;

const ComponentFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled.button`
  background: #45749b;
  color: #fff;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 4px;
`;

const ChatBoxWrapper = styled.div`
  padding: 10px;
  overflow: auto;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  flex: 1;
`;

const ChatMessageWrapper = styled.div`
  width: 100%;
  margin: 0 0 15px;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
`;

const MessageSenderText = styled.div`
  font-size: 12px;
  margin: 0 0 15px;
  color: #30649c;
  align-self: flex-start;
  display: ${props => (props.receivedMsg ? 'block' : 'none')};
`;

const MessageBox = styled.div`
  padding: 6px 10px;
  border-radius: 6px 0 6px 0;
  position: relative;
  background: ;
  border: 2px solid rgba(100, 170, 0, 0.1);
  color: #6c6c6c;
  font-size: 12px;
  background: ${props =>
    props.receivedMsg ? 'rgba(100, 170, 0, 0.1)' : 'rgba(0, 114, 135, 0.1)'};
  border: ${props =>
    props.receivedMsg
      ? '2px solid rgba(100, 170, 0, 0.1)'
      : '2px solid rgba(0, 114, 135, 0.1)'};
  align-self: ${props => (props.receivedMsg ? 'flex-start' : 'flex-end')};
`;

export default class ChatWithUsWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formObj: {},
      messages: [
        {
          name: 'Evangeline Abbott',
          message: 'Nam tempor diam dictum sapien. Aenean',
          recieved: true,
          id: 1232,
        },
        {
          name: 'MacKensie Wilkinson',
          message: 'arcu ac orci. Ut semper pretium neque. Morbi',
          recieved: true,
          id: 12332,
        },
        {
          name: 'Lalith Narayan',
          message: 'purus. Nullam scelerisque',
          recieved: false,
          id: 12,
        },
      ],
    };
  }

  // This is a dummy function to generate random ID to the new Message
  randomString = length =>
    Math.random()
      .toString(length)
      .replace('0.', '');

  onFormChange = (e, key) => {
    const { formObj } = this.state;
    this.setState({
      formObj: { ...formObj, ...{ [key]: e.target.value } },
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { formObj, messages } = this.state;
    const that = this;
    if (formObj.message) {
      console.log(formObj.message); //eslint-disable-line
      this.setState({
        messages: messages.concat([
          {
            name: 'Lalith',
            message: formObj.message,
            id: that.randomString(3),
          },
        ]),
        formObj: {
          message: '',
        },
      });
    } else {
      alert("Message can't be empty"); //eslint-disable-line
    }
  };

  render() {
    const { formObj, messages } = this.state;
    return (
      <ComponentWrapper
        encType="multipart/form-data"
        onSubmit={e => this.onFormSubmit(e)}
      >
        <ChatBoxWrapper>
          {messages.map(message => (
            <ChatMessageWrapper key={message.id}>
              <MessageSenderText receivedMsg={message.recieved}>
                {message.name}
              </MessageSenderText>
              <MessageBox receivedMsg={message.recieved}>
                {message.message}
              </MessageBox>
            </ChatMessageWrapper>
          ))}
        </ChatBoxWrapper>
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
          <SubmitButton type="submit">Submit</SubmitButton>
        </ComponentFooterWrapper>
      </ComponentWrapper>
    );
  }
}

ChatWithUsWidget.propTypes = {};
