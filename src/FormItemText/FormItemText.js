import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './FormItemText.css';

const FormItemText = ({order, label, value, className}) => {
  return (
    <div className={`form-item-text ${className}`}>
      <label className={`${className}__label`}>
        <span className={`${className}_big-font`}>{label}</span>
        <textarea className={`${className}__core form-item-text__textarea`} rows="4" value={value} />
      </label>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormItemText);

FormItemText.propTypes = {
  order: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.string
}
