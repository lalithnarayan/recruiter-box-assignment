/**
 *
 * FrequentlyAskedQuestionsContainer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import FAQHelperComponent from './frequentlyAskedQuestionsComponent';

export function FrequentlyAskedQuestionsContainer() {
  return <FAQHelperComponent />;
}

FrequentlyAskedQuestionsContainer.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(FrequentlyAskedQuestionsContainer);
