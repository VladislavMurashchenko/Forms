import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './FormItemList.css';

const FormItemList = ({order, label, values, className}) => {

  return (
    <div className={`form-item-list ${className}`}>
      <div className={`${className}__label`}>
        <span className={`${className}_big-font`}>{label}</span>
      </div>
      <ul className="form-item-list__list">
        {
          values.map((value, index) => (
            <li className="form-item-list__list-item" key={index}>
              <input className={`${className}__core`} type="text" value={value}/>
            </li>
          ))
        }
      </ul>
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
)(FormItemList);

FormItemList.propTypes = {
  order: PropTypes.number,
  label: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string)
}
