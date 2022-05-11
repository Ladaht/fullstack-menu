import React, { useState, useEffect } from "react";
import { Link,  NavLink, Redirect} from "react-router-dom";
import "./FoodMenu.css";
import SnackOrBoozeApi from "./Api";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem, 
  Button
} from "reactstrap";
import {passChoice} from "./FoodItem";  // function passChoice to share data with FoodItem conponent
import { addItem } from "./AddItem";
import {totalItemFunc} from "./Home";

let total = [];


function FoodMenu({title, name }) {
  const [isLoading, setIsLoading] = useState(true);
  const [choices, setChoices] = useState([]); // state for snacks 
 
   
  useEffect(() => { // function inside useEffect is ran after App is rendered
    async function getChoices(paramName) {
      let choice = await SnackOrBoozeApi.getMenu(paramName); // Need to refractor for params link
      setChoices(choice); 
      total.push(choice); // keepinf track of total item per menu for Home component
      setIsLoading(false);
    }
   console.log("inside useeffect",name);
   name.map(item => getChoices(item));
   
  }, [name]); // useEffect with a [] dependency will run ONCE changes

  if (isLoading) {
  return <p>Loading &hellip;</p>;
  }
  
  if (name.length >= 2){
    console.log(choices);
    console.log("here is your total", total);
    totalItemFunc(total);
   return (<Redirect exact to="/"/>);
  }

  total = [];

  
  passChoice(choices); // Automatically send data to FoodItem component
  
  return (
   
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} Menu 
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {choices.map(item => ( // map for looping items for menu choices
              <Link to={`/${item.type}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
            <br/>
             </ListGroup>
                  
                  <NavLink exact to="/additem" >
                     <Button variant="secondary" onClick={()=>addItem(title, choices)} > Add {title} </Button>
                  </NavLink>

        </CardBody>
      </Card>
    </section>
   
  );
}


export default FoodMenu;
