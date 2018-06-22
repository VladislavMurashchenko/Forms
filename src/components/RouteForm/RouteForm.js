import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import "../../imgs/no_image_available.png";
import "./RouteForm.css";

import AppForm from '../AppForm/AppForm';


class RouteForm extends Component {
  render() {
    const {name, description, image, router, noSuchForm, isLoaded} = this.props;

    return noSuchForm ? <div className="no-such-form">No Such Form</div> : isLoaded && (
      <main className="route-form">
        <section className="route-form__container">

          <header className="route-form__header">
            <div className="route-form__image-wrapper">
              <img className="route-form__image" src={image} alt={name}/>
            </div>
            <h1 className="route-form__name">{name}</h1>
            <p className="route-form__description">{description}</p>
          </header>

          <AppForm id={+this.props.params.id} />

          <footer className="route-form__footer">
            <button className="route-form__go-back" onClick={router.goBack}>Go Back</button>
          </footer>

        </section>
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = +ownProps.params.id;

  const formInfo = state.formsInfo ? state.formsInfo.find(item => item.id === id) : null;

  const isLoaded = !!formInfo;

  const noSuchForm = !formInfo && state.formsInfo;

  return {
    noSuchForm,
    isLoaded,
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
