/**
 *
 * ChatWidgetContainer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ChatWidget from './chatWidget';

export function ChatWidgetContainer() {
  return <ChatWidget />;
}

ChatWidgetContainer.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(ChatWidgetContainer);
