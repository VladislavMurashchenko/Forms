import React from 'react';
import { Link } from 'react-router';

import './no_image_available.png'
import './FormInfo.css';

export const FormInfo = ( {id, name, description, image, currentPath} ) => {
  const path = `${currentPath}/${id}`;
  
  return (
    <li className="form-info">
      <div className="form-info__image-wrapper">
        <img src={image} alt={name} className="form-info__image"/>
      </div>

      <h2 className="form-info__name">{name}</h2>

      <p className="form-info__description">{description}</p>

      <div className="form-info__btn-wrapper">
        <button className="form-info__btn">Delete</button>
        <Link to={path} className="form-info__btn">View</Link>
      </div>
    </li>
  );
}
