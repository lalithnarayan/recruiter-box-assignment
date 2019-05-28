/**
 *
 * Input
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

const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  box-shadow: none;
  outline: none;
  border: none;
`;

const Label = styled.div`
  text-align: center;
  div {
    width: 30px;
    font-size: 14px;
    font-weight: bold;
  }
`;

function Input(props) {
  const { disabled, value, showLabel, label, placeholder } = props.options;
  return (
    <ComponentWrapper disabled={disabled}>
      {showLabel ? <Label>{label}</Label> : null}
      <StyledInput
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        onChange={props.onChange}
      />
    </ComponentWrapper>
  );
}

Input.propTypes = {
  options: PropTypes.object,
  onChange: PropTypes.func,
};

Input.defaultProps = { options: { disabled: false } };

export default memo(Input);
