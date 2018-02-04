import React from 'react';
import './no_image_available.png'
import './FormInfo.css';

export const FormInfo = ( {id, name, description, image} ) => {
  return (
    <li className="form-info">
      <div className="form-info__image-wrapper">
        <img src={image} alt={name} className="form-info__image"/>
      </div>
      <h2 className="form-info__name">{name}</h2>
      <p className="form-info__description">{description}</p>
      <div className="form-info__btn-wrapper">
        <button className="form-info__btn">Delete</button>
        <button className="form-info__btn">View</button>
      </div>
    </li>
  );
}
