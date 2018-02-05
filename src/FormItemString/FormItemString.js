import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FormItemString = ({order, label, value}) => {

  return React.createElement('div', null, 'FormItemString');
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
