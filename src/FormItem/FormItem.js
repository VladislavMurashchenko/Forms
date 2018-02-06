import React from 'react';
import PropTypes from 'prop-types';

import './FormItem.css';

import FormItemString from '../FormItemString/FormItemString';
import FormItemInteger from '../FormItemInteger/FormItemInteger';
import FormItemList from '../FormItemList/FormItemList';
import FormItemDouble from '../FormItemDouble/FormItemDouble';
import FormItemText from '../FormItemText/FormItemText';
import FormItemBool from '../FormItemBool/FormItemBool';

const formItem = {
  string: FormItemString,
  integer: FormItemInteger,
  list: FormItemList,
  double: FormItemDouble,
  text: FormItemText,
  bool: FormItemBool
}

const FormItem = ({ order, type, label, value, values }) => {
  const CustomFormItem = formItem[type];

  const props = {order, label, value, values};

  return <CustomFormItem className="form-item" {...props} />;
}

export default FormItem;

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
