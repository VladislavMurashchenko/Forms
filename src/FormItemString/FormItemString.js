import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FormItemString = ({order, label, value, className}) => {

  return (
    <div className={`form-item-string ${className}`}>
      <label className={`${className}__label`}>
        <span className={`${className}_big-font`}>{label}</span>
        <input className={`${className}__core`} type="text" value={value} />
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
)(FormItemString);

FormItemString.propTypes = {
  order: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.string
}
