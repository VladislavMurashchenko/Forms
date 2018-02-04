import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getObjectById from '../functions/get-object-by-id';

import './AppForm.css';

class AppForm extends Component {
  render() {
    return (
      <form className="app-form">

      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id;

  const data = getObjectById(state.formsInfo, id).data;

  console.log(data);

  return {
    id,
    data
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppForm);

AppForm.propTypes = {
  id: PropTypes.number,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf([
        'string',
        'integer'
      ]),
      label: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
      ]),
      values: PropTypes.arrayOf(PropTypes.string)
    })
  )
}
