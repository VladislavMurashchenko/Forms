import React from 'react';
import PropTypes from 'prop-types';

import FormItemString from '../FormItemString/FormItemString';
import FormItemInteger from '../FormItemInteger/FormItemInteger';
import FormItemList from '../FormItemList/FormItemList';
import FormItemDouble from '../FormItemDouble/FormItemDouble';
import FormItemText from '../FormItemText/FormItemText';
import FormItemBool from '../FormItemBool/FormItemBool';

const FormItems = {
  FormItemString,
  FormItemInteger,
  FormItemList,
  FormItemDouble,
  FormItemText,
  FormItemBool
}

const FormItem = (props) => {
  const typeCapitalized = props.type[0].toUpperCase() + props.type.slice(1);
  const componentName = `FormItem${typeCapitalized}`;

  return React.createElement(FormItems[componentName], {...props}, null);
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
