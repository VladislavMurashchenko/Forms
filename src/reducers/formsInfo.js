const initialState = null;

export default function(state = initialState, {type, payload} = {}) {

  if (type === 'RECEIVED_FORM_DATA') {

    return state.map(item => item.id !== payload.id ?
      item : {
        ...item,
        data: payload.data
      });
  }

  if (type === 'RECEIVED_FORMS_INFO') {
    return payload;
  }

  if (type === 'DELETE_FORM') {
    return state.filter(item => item.id !== payload);
  }

  if (type === 'SAVE_FORM') {
    return state.map(item => {
      return item.id !== payload.id ? item : {
        ...item,
        data: payload.data
      };
    });
  }


  return state;
}
