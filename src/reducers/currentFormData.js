const initialState = null;

export default function(state = initialState, {type, payload} = {}) {

  if (type === "REFILL_FORM") {
    return payload;
  }

  if (type === "UNMOUNT_FORM") {
    return null;
  }

  return state;
}
