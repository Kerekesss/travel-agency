import React from "react";
import { Link } from "react-router-dom";
function CardItem(props) {
  return (
    <>
      <div className="card-item">
        <Link className="card-item-link" to={props.path}>
          <div className="card-pic-wrapper" data-category={props.label}>
            <img className="card-pic" src={props.src} alt="Travel Image" />
          </div>
          <div className="card-info">
            <h5 className="card-text">{props.text}</h5>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CardItem;
