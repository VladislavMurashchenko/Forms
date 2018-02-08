import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './FormItemBool.css';

const FormItemBool = ({order, label, value, className, onValueChange}) => {

  function valueChange(e) {
    onValueChange(e.target.checked, order);
  }

  return (
    <div className={`form-item-bool ${className}`}>
      <span className={`${className}_big-font form-item-bool__label`}>{label}</span>
      <label className="form-item-bool__checkfield">
        <input className="form-item-bool__input" type="checkbox" onChange={valueChange} checked={value} />
        <i className="form-item-bool__check-mark"></i>
      </label>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    onValueChange: (value, order) => {
      const data = {
        value
      };

      dispatch({type: "FORM_ITEM_VALUE_CHANGE", payload: {data, order}});
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormItemBool);

FormItemBool.propTypes = {
  order: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.bool,
  className: PropTypes.string,
  onValueChange: PropTypes.func
}
