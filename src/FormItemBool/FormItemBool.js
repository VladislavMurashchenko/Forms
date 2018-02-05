import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FormItemBool = ({order, label, value}) => {
  return (<div>FormItemBool</div>);
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
)(FormItemBool);

FormItemBool.propTypes = {
  order: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.bool
}
