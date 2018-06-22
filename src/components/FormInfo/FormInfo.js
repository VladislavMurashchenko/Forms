import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import '../../imgs/no_image_available.png';
import './FormInfo.css';

let FormInfo = ( {id, name, description, image, currentPath, onDeleteForm} ) => {
  const path = `${currentPath}/${id}`;

  return (
    <li className="form-info">
      <div className="form-info__image-wrapper">
        <img src={image} alt={name.slice(0, -5)} className="form-info__image"/>
      </div>

      <h2 className="form-info__name">{name}</h2>

      <p className="form-info__description">{description}</p>

      <div className="form-info__btn-wrapper">
        <button className="form-info__btn"
                onClick={onDeleteForm.bind(this, id)}>Delete</button>
        <Link to={path} className="form-info__btn">View</Link>
      </div>
    </li>
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteForm: id => {
      dispatch({type: "DELETE_FORM", payload: id})
    }
  }
};

FormInfo = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormInfo);

export { FormInfo };
