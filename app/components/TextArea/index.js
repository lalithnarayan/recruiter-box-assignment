/**
 *
 * TextArea
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ComponentWrapper = styled.div`
  width: 100%;
  background: ${props => (props.disabled ? '#d5d5d5' : '#fff')};
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #cdcdcd;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  background: transparent;
  box-shadow: none;
  outline: none;
  border: none;
`;

function TextArea(props) {
  const { disabled, value, placeholder, rows } = props.options;
  return (
    <ComponentWrapper disabled={disabled}>
      <StyledTextArea
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        rows={rows}
        onChange={props.onChange}
      />
    </ComponentWrapper>
  );
}

TextArea.propTypes = {
  options: PropTypes.object,
  onChange: PropTypes.func,
};

TextArea.defaultProps = { options: { disabled: false, rows: 10 } };

export default memo(TextArea);
