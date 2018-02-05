import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FormItemString = ({order, label, value}) => {

  return (
    <div className="form-item-string">
      <label>
        {label}<br /><input type="text" value={value} />
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
