import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FormItemText = ({order, label, value}) => {
  return <div>FormItemText</div>;
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
)(FormItemText);

FormItemText.propTypes = {
  order: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.string
}
