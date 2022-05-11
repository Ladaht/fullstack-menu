import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Choice from "./FoodItem";
import AddItem from "./AddItem";
/** TOP LEVEL CONPONENT */






function App() {  
 
  
 /** See Section 41.2 React Router Patterns to implement search term for Api
  * intead of the hard-coded getChoices() function below with one line of code
  * for SnackOrBoozeApi calls
  * Main Issue: how to make sure the FoodItem components recieve the data for the Api
  * call. Otherwise items for a particular snack or booze is not available
  * Refactoring needed nor dynanic api calls. 
  */

 
  return (    // Need refractor for dynamic link. params

<div className="App">
<BrowserRouter>

<NavBar />
<main>
 <Switch> 
   <Route exact path="/">
     <Menu name ={["snacks", "drinks"]}/>
     <Home />
   </Route>
     <Route exact path="/additem">
     <AddItem /> 
   </Route>
   <Route exact path="/snacks"   >
   <Menu name ={["snacks"]} title="Snacks" />
   </Route>
   <Route path="/snacks/:id">
     <Choice  cantFind="/snacks" />
   </Route>
   <Route exact path="/drinks" >
    <Menu name ={["drinks"]} title="Drinks" />
   </Route>
   <Route path="/drinks/:id">
     <Choice  cantFind="/drinks" />
   </Route>
    <Route>
     <p>Hmmm. I can't seem to find what you want.</p>
   </Route>
 </Switch>
</main>
</BrowserRouter>
</div>
);
}



export default App;