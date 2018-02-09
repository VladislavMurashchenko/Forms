export const getStaticFormData = (urlBase, id) => dispatch => {
  fetch(`${urlBase}/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('get static form data response is not ok');
    })
    .then(data => dispatch({
      type: "RECEIVED_FORM_DATA",
      payload: {data: data.data, id}
    }))
    .catch(error => {
      window.console.error(error.message);
    });
}
