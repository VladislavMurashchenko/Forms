import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppForm from '../AppForm/AppForm';

class RouteForm extends Component {
  render() {
    const {name, description, image, id, router } = this.props;
    console.log(router);
    return (
      <main className="route-form">
        <section className="route-form__container">
          <header className="route-form__header">
            <div>
              <img src={image} alt={name}/>
            </div>
            <h1>{name}</h1>
            <p>{description}</p>
          </header>
          <AppForm id={id} />
          <footer>
            <button onClick={router.goBack}>Go Back</button>
          </footer>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.params.id;

  let formInfo;

  state.formsInfo.forEach(info => {
    if (info.id === +id) {
     formInfo = info;
    }
  });

  return {
    ...formInfo
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteForm);


RouteForm.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number
};
