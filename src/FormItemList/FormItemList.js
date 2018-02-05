import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FormItemList = ({order, label, values}) => {
  console.log(values);
  return (
    <div className="form-item-list">
      {label}
      <ul>
        {
          values.map(value => <li><input type="text" value={value}/></li>)
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
