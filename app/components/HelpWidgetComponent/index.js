/**
 *
 * HelpWidgetComponent
 *
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import FrequentlyAskedQuestionsComponent from 'containers/FrequentlyAskedQuestionsContainer/Loadable';
import MailUsComponent from 'containers/MailUsContainer/Loadable';
import ChatWithUsComponent from 'containers/ChatWidgetContainer/Loadable';

const ComponentWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
`;

const TabsSwitcherWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  z-index: 1;
`;

const TabsList = styled.ul`
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

const TabItemWrapper = styled.li`
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  line-height: 1;
  display: block;
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  float: left;
  min-width: 120px;
}`;

const TabItemAnchor = styled.a`
  z-index: 2;
  padding: 18px 25px 12px 25px;
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  color: #444444;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  margin-right: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 120%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    content: '';
    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
    -webkit-transform: perspective(5px) rotateX(2deg);
    -webkit-transform-origin: bottom;
    -moz-transform: perspective(5px) rotateX(2deg);
    -moz-transform-origin: bottom;
    transform: perspective(5px) rotateX(2deg);
    transform-origin: bottom;
    background: ${props => (props.isActive ? '#eeeeee' : '#d5d5d5')};
    border: 1px solid #c2c2c2;
    border-bottom: none;
  }
`;
const TabItemIcon = styled.i`
  margin: 0 6px;
  font-size: 12px;
  color: ${props => (props.isActive ? '#1e1e1e' : '#999999')};
`;
const TabItemText = styled.div`
  font-size: 12px;
  color: #999999;
`;
const TabsContentWrapper = styled.div`
  background-color: #eeeeee;
  -webkit-box-shadow: -8px -4px 7px 0px rgba(188, 188, 188, 1);
  -moz-box-shadow: -8px -4px 7px 0px rgba(188, 188, 188, 1);
  box-shadow: -8px -4px 7px 0px rgba(188, 188, 188, 1);
`;
const TabCloseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 16px;
  width: 40px;
  position: relative;
  padding: 18px 0px 0px 0px;
  cursor: pointer;
  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 120%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    content: '';
    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
    -webkit-transform: perspective(5px) rotateX(2deg);
    -webkit-transform-origin: bottom;
    -moz-transform: perspective(5px) rotateX(2deg);
    -moz-transform-origin: bottom;
    transform: perspective(5px) rotateX(2deg);
    transform-origin: bottom;
    background-color: #555555;
  }
`;

export default class HelpWidgetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTabIndex: 1,
    };
  }

  selectTab = tabIndex => {
    this.setState({
      currentTabIndex: tabIndex,
    });
  };

  renderTabContent() {
    const { currentTabIndex } = this.state;
    if (currentTabIndex === 1) {
      return <ChatWithUsComponent />;
    } else if (currentTabIndex === 2) { //eslint-disable-line
      return <FrequentlyAskedQuestionsComponent />;
    } else if (currentTabIndex === 3) {
      return <MailUsComponent />;
    }
    return null;
  }

  render() {
    const { currentTabIndex } = this.state;
    return (
      <ComponentWrapper>
        <TabsSwitcherWrapper>
          <TabsList>
            <TabItemWrapper>
              <TabItemAnchor
                isActive={currentTabIndex === 1 || false}
                onClick={() => this.selectTab(1)}
              >
                <TabItemIcon
                  isActive={currentTabIndex === 1 || false}
                  className="fas fa-comment-alt"
                />
                <TabItemText>Live Chat</TabItemText>
              </TabItemAnchor>
            </TabItemWrapper>
            <TabItemWrapper>
              <TabItemAnchor
                isActive={currentTabIndex === 2 || false}
                onClick={() => this.selectTab(2)}
              >
                <TabItemIcon
                  className="fas fa-search"
                  isActive={currentTabIndex === 2 || false}
                />
                <TabItemText>FAQ</TabItemText>
              </TabItemAnchor>
            </TabItemWrapper>
            <TabItemWrapper>
              <TabItemAnchor
                isActive={currentTabIndex === 3 || false}
                onClick={() => this.selectTab(3)}
              >
                <TabItemIcon
                  className="fas fa-envelope"
                  isActive={currentTabIndex === 3 || false}
                />
                <TabItemText>Mail Us</TabItemText>
              </TabItemAnchor>
            </TabItemWrapper>
            <TabCloseWrapper>
              <TabItemIcon className="fas fa-times" />
            </TabCloseWrapper>
          </TabsList>
        </TabsSwitcherWrapper>
        <TabsContentWrapper>{this.renderTabContent()}</TabsContentWrapper>
      </ComponentWrapper>
    );
  }
}

HelpWidgetComponent.propTypes = {};
