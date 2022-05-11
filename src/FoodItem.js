import React, {useState}from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
let items = []; 

// This function is a bridge to share FoodMenu data with FoodItem
function passChoice(arg){
items = arg;
}


function FoodItem({cantFind}) {
  const { id } = useParams();

  let choice = items.find(item => item.id === id);
  //items = [];
  if (!choice) return <Redirect to={cantFind} />;
 
  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {choice.name}
          </CardTitle>
          <CardText className="font-italic">{choice.description}</CardText>
          <p>
            <b>Recipe:</b> {choice.recipe}
          </p>
          <p>
            <b>Serve:</b> {choice.serve}
          </p>
          </CardBody>
      </Card>
        
    </section>
  );
}

export {passChoice};
export default FoodItem;
