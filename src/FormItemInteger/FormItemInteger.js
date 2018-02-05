import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FormItemInteger = ({order, label, value}) => {
  return (
    <div className="form-item-integer">
      <label>
        {label}<br /><input type="number" value={value} />
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
