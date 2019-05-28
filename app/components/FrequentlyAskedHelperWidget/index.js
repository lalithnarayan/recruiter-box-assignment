/**
 *
 * FrequentlyAskedHelperWidget
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function FrequentlyAskedHelperWidget() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

FrequentlyAskedHelperWidget.propTypes = {};

export default memo(FrequentlyAskedHelperWidget);
