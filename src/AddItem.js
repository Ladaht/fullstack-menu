import React, { useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
let title = "Snacks or Drinks";






// data recieved from FoodMenu component on Click to add drink or snacks
function addItem(itemTitle, choices){
console.log("someone whats to add items", itemTitle, choices);
title = itemTitle;
}

function AddItem() {

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Please add {title}
                 
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}


export {addItem};
export default AddItem;