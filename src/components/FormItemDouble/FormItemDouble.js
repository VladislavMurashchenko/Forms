import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FormItemDouble = ({order, label, value, className, onValueChange}) => {

  function valueChange(e) {
    onValueChange(e.target.value, order);
  }

  return (
    <div className={`form-item-double ${className}`}>
      <label className={`${className}__label`}>
        <span className={`${className}_big-font`}>{label}</span>
        <input className={`${className}__core`}
               onChange={valueChange} type="text" value={value} />
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

      dispatch({type: "FORM_ITEM_DOUBLE_VALUE_CHANGE", payload: {value, order}});
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormItemDouble);


FormItemDouble.propTypes = {
  order: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  className: PropTypes.string,
  onValueChange: PropTypes.func
}
