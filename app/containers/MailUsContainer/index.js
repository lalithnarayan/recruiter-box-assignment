/**
 *
 * MailUsComponent
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MailUsWidget from './mailUsComponent';

export function MailUsComponent() {
  return <MailUsWidget />;
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(MailUsComponent);
