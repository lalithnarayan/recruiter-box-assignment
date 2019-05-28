/**
 *
 * FrequentlyAskedHelperWidget
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const ComponentWrapper = styled.div`
  width: 100vw;
  display: flex;
`;

const ComponentRightSection = styled.div`
  flex: 7;
  padding: 30px;
  padding-bottom: 0px;
`;

const H3 = styled.div`
  color: #3f3f3f;
  font-size: 20px;
  margin: 10px 0px;
`;

const WriteEmailButton = styled.button`
  background-color: #ececec;
  border: 1px solid #cdcdcd;
  padding: 6px 15px;
  border-radius: 2px;
  color: #808080;
  font-size: 12px;
  cursor: pointer;
  margin: 10px 0px;
  &:hover {
    background-color: #808080;
    color: #3f3f3f;
  }
  i {
    margin: 0px 5px;
  }
`;

const Paragraph = styled.p`
  color: #666666;
  font-size: 10px;
`;

const ComponentLeftSection = styled.div`
  padding: 30px;
  flex: 3;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #bcbcbc;
`;

const InputSearchSection = styled.div``;
const InputSearchWrapper = styled.div`
  border: 1px solid #87a7be;
  padding: 5px;
  background: #fff;
  box-shadow: 0px 0px 3px 0px #3a81bd;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    margin: 0px 8px;
    color: #999999;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  border-radius: 20px;
`;

const FAQTopicsSections = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0px 0px 0px;
  margin: 0px;
`;

const FAQTopicWrapper = styled.li`
  list-style: none;
  flex: 0 0 33.333333%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  padding: 24px;
  border: ${props =>
    props.isActive ? '1px solid #c0c0c0' : '1px solid transparent'};
  background-color: ${props => (props.isActive ? '#fff' : 'none')};
  border-radius: 8px;
`;

const FAQOptionsIcon = styled.i`
  color: #3a81bd;
  border-radius: 60px;
  border: ${props =>
    props.IsIconRound ? '1px solid #3a81bd' : '1px solid transparent'};
  padding: 0.5em 0.6em;
  font-size: ${props => (props.IsIconRound ? '16px' : '18px')};
`;

const FAQTopicText = styled.div`
  color: #3a81bd;
  font-size: 14px;
  margin: 8px 0px;
`;

const FAQOptions = [
  {
    name: 'Sharing Options',
    icon: 'fas fa-folder',
    rounded: true,
    filterkey: 'sharingOptions',
  },
  {
    name: 'Managing Options',
    icon: 'fas fa-thumbtack',
    rounded: true,
    filterkey: 'manageOptions',
  },
  {
    name: 'Managing Candidates',
    icon: 'fas fa-file',
    rounded: false,
    filterkey: 'manageCandidates',
  },
  {
    name: 'Account Management',
    icon: 'fas fa-user-cog',
    rounded: false,
    filterkey: 'manageAccount',
  },
  {
    name: 'Sourcing Candidates',
    icon: 'fas fa-folder',
    rounded: true,
    filterkey: 'sourceCandidates',
  },
  {
    name: 'Reporting',
    icon: 'fas fa-folder',
    rounded: true,
    filterkey: 'reporting',
  },
];

export default class FrequentlyAskedHelperWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFAQFilterChange = selectedFilterOption => {
    this.setState({
      selectedFilterOption,
    });
  };

  render() {
    const { selectedFilterOption } = this.state;
    return (
      <ComponentWrapper>
        <ComponentLeftSection>
          <H3>
            <FormattedMessage {...messages.preferEmail} />
          </H3>
          <WriteEmailButton>
            <i className="far fa-envelope" />
            <FormattedMessage {...messages.mailUs} />
          </WriteEmailButton>
          <Paragraph>
            <FormattedMessage {...messages.mailUsExplaination} />
          </Paragraph>
        </ComponentLeftSection>
        <ComponentRightSection>
          <InputSearchSection>
            <InputSearchWrapper>
              <i className="fas fa-search" />
              <StyledInput
                placeholder="What can we help you with? Start typing your question"
                onChange={this.props.onSearchParamChange}
              />
            </InputSearchWrapper>
          </InputSearchSection>
          <FAQTopicsSections>
            {FAQOptions.map(option => (
              <FAQTopicWrapper
                isActive={selectedFilterOption === option.filterkey || false}
                onClick={() => this.onFAQFilterChange(option.filterkey)}
                key={option.filterkey}
              >
                <FAQOptionsIcon
                  className={option.icon}
                  IsIconRound={option.rounded}
                />
                <FAQTopicText>{option.name}</FAQTopicText>
              </FAQTopicWrapper>
            ))}
          </FAQTopicsSections>
        </ComponentRightSection>
      </ComponentWrapper>
    );
  }
}

FrequentlyAskedHelperWidget.propTypes = {
  onSearchParamChange: PropTypes.func,
};
