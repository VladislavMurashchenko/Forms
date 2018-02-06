import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './FormItemBool.css';

const FormItemBool = ({order, label, value, className}) => {
  return (
    <div className={`form-item-bool ${className}`}>
      <span className={`${className}_big-font form-item-bool__label`}>{label}</span>
      <label className="form-item-bool__checkfield">
        <input className="form-item-bool__input" type="checkbox" checked={value} />
        <i class="form-item-bool__check-mark"></i>
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
)(FormItemBool);

FormItemBool.propTypes = {
  order: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.bool
}
