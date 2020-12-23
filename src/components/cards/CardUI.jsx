import React from "react";
import "./card-style.css";

const Card = props => {
  return (
    <div className="col-sm-4 mt-5">
    <div className="card text-center">
      <div className="overflow">
        <img
          src={props.img}
          alt="image1"
          className="card-img-top"
        />
      </div>

      <div className="card-body text-dark">
        <h4 className="card-title"> {props.title} </h4>
        <p className="card-text text-secondary">{props.info}</p>

        <a href="#" className="btn btn-outline-success">
          Go Anywhere
        </a>
      </div>
    </div>
    </div>
  );
};

export default Card;
