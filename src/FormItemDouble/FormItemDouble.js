import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FormItemDouble = ({order, type, label, value, values}) => {
  return <div>FormItemDouble</div>;
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
)(FormItemDouble);


FormItemDouble.propTypes = {
  order: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.number,
}
