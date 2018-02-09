export const getFormsInfo = (url) => dispatch => {
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('get forms info response is not ok');
    })
    .then(data => dispatch({type: "RECEIVED_FORMS_INFO", payload: data.data}))
    .catch(error => {
      window.console.error(error.message);
    });
}
