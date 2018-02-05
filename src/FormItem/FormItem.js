import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormItem extends Component {
  render() {
    const { order, type, label, value, values } = this.props;
    console.log(this.props);
    return (
      <div>formItem</div>
    );
  }
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
)(FormItem);

FormItem.propTypes = {
  order: PropTypes.number,
  type: PropTypes.oneOf([
    'string',
    'integer',
    'list',
    'double',
    'text',
    'bool'
  ]),
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  values: PropTypes.arrayOf(PropTypes.string)
}
