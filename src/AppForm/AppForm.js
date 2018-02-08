import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './AppForm.css';

import FormItem from '../FormItem/FormItem';



class AppForm extends Component {
  componentDidMount() {
    this.refillForm();
  }

  componentWillUnmount() {
    this.props.onUnmountForm();
  }

  refillForm() {
    this.props.onRefillForm(this.props.staticFormData);
  }

  saveForm() {
    this.props.onSaveForm(this.props.id, this.props.currentFormData);
  }

  render() {
    return (
      <form className="app-form">
        {
          this.props.currentFormData && this.props.currentFormData.map( (item, index) => {
            return <FormItem key={index}
                             order={index}
                             type={item.type}
                             label={item.label}
                             value={item.value}
                             values={item.values} />
          })
        }
        <button className="app-form__btn app-form__btn_save"
                onClick={this.saveForm.bind(this)}
                type="button">Save</button>
        <button className="app-form__btn app-form__btn_reject"
                onClick={this.refillForm.bind(this)}
                type="button">Reject</button>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  const formInfo = state.formsInfo.find(item => item.id === ownProps.id);

  const staticFormData = formInfo ? formInfo.data : null;
  const currentFormData = state.currentFormData;

  return {
    staticFormData,
    currentFormData
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onRefillForm: (data) => {
      dispatch({type: "REFILL_FORM", payload: data});
    },
    onSaveForm: (id, data) => {
      dispatch({type: "SAVE_FORM", payload: {id, data} });
    },
    onUnmountForm: () => {
      dispatch({type: "UNMOUNT_FORM"});
    }
  };
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
