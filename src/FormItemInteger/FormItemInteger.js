import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FormItemInteger = ({order, label, value, className}) => {
  return (
    <div className={`form-item-integer ${className}`}>
      <label className={`${className}__label`}>
        <span className={`${className}_big-font`}>{label}</span>
        <input className={`${className}__core`} type="number" value={value} />
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
)(FormItemInteger);


FormItemInteger.propTypes = {
  order: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.number,
}
