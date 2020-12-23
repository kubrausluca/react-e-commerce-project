import React, {useState} from "react";
import "./CardUI.css";

const Card = props => {
  const [counter, setCounter] = useState(
    Number(localStorage.getItem("counter")) || 0
  );

  const click = event => {
    event.target.name === "like"
      ? setCounter(counter + 1)
      : setCounter(counter - 1);
  };

  localStorage.setItem("counter", counter);

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

        <div className="d-flex justify-content-center mx-5">
            <button
              type="button"
              name="like"
              className="btn btn-success mx-5"
              onClick={click}
            >
              Like
            </button>
            <h3>{counter}</h3>
            <button
              type="button"
              name="dislike"
              className="btn btn-danger mx-5"
              onClick={click}
            >
              Dislike
            </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
