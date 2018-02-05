import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getObjectById from '../functions/get-object-by-id';

import './AppForm.css';

import FormItem from '../FormItem/FormItem';



class AppForm extends Component {
  render() {
    return (
      <form className="app-form">
        {
          this.props.data.map( (item, index) => {
            return <FormItem key={index}
                             order={index}
                             type={item.type}
                             label={item.label}
                             value={item.value}
                             values={item.values} />
          })
        }
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const data = getObjectById(state.formsInfo, ownProps.id).data;

  return {
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
    })
  )
}
