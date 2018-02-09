const initialState = null;

export default function(state = initialState, {type, payload} = {}) {

  if (type === "REFILL_FORM") {
    return payload;
  }

  if (type === 'RECEIVED_FORM_DATA') {
    return payload.data;
  }

  if (type === "UNMOUNT_FORM") {
    return null;
  }

  if (type === "FORM_ITEM_VALUE_CHANGE") {
    const cloneWithNewItemValue = (item, i) => {
      return i !== payload.order ? item : {
        ...item,
        value: payload.value
      }
    }

    return state.map(cloneWithNewItemValue);
  }

  if (type === "FORM_ITEM_LIST_VALUE_CHANGE") {
    const replaceListItem = (item, i) => {
      return i !== payload.valueOrder ? item : payload.value;
    }

    const cloneWithNewItemValue = (item, i) => {
      return i !== payload.order ? item : {
        ...item,
        values: item.values.map(replaceListItem)
      }
    }

    return state.map(cloneWithNewItemValue);
  }

  if (type === "FORM_ITEM_INTEGER_VALUE_CHANGE") {
    const value = payload.value;
    const lastChar = value.charAt(value.length - 1);

    if ( isNaN(lastChar) ) return state;

    const cloneWithNewItemValue = (item, i) => {
      return i !== payload.order ? item : {
        ...item,
        value: payload.value
      }
    }

    return state.map(cloneWithNewItemValue);
  }

  if (type === "FORM_ITEM_DOUBLE_VALUE_CHANGE") {
    const value = payload.value;
    const lastCharPisition = value.length - 1;
    const lastChar = value.charAt(lastCharPisition);

    const firstDot = lastChar === '.' && value.indexOf('.') === lastCharPisition;

    if ( isNaN(lastChar) && !firstDot) return state;

    const cloneWithNewItemValue = (item, i) => {
      return i !== payload.order ? item : {
        ...item,
        value: payload.value
      }
    }

    return state.map(cloneWithNewItemValue);
  }

  return state;
}
