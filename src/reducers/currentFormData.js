const initialState = null;

export default function(state = initialState, {type, payload} = {}) {

  if (type === "REFILL_FORM") {
    return payload;
  }

  if (type === "UNMOUNT_FORM") {
    return null;
  }

  if (type === "FORM_ITEM_VALUE_CHANGE") {
    return [
      ...state.map((item, i) => {
        return i !== payload.order ? item : {
          ...item,
          ...payload.data
        }
      })
    ]
  }

  return state;
}
