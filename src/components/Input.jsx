import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      type, name, onChange, value, label, dataTestId,
    } = this.props;
    return (
      <label htmlFor={name}>
        { label }
        <input
          data-testid={dataTestId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          id={name}
        />
      </label>
    );
  }
}

Input.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  name: '',
  label: '',
  onChange: null,
};

export default Input;
