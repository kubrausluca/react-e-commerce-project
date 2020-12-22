import React from "react";
import Card from "./CardUI";
import DataList from "../data/Data";

function Cards(props) {

  const CardComp = DataList.map((item, index) => (
    <Card 
      img={item.img} 
      title={item.title} 
      info={item.info} 
    />
  ));

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        {CardComp}
      </div>
    </div>
  );
}

export default Cards;
