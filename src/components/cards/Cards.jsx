import React from "react";
import Card from "./CardUI";
import DataList from "../data/Data";

function Cards(props) {

  const CardComponent = DataList.map((item, index) => (
    <Card 
      id={index}
      img={item.img} 
      title={item.title} 
      info={item.info} 
    />
  ));

  return (
    <div className="container">
      <div className="row">
        {/* <div className="col-md-4"> */}
          {CardComponent}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Cards;
