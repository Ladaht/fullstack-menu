import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
let totalItem =[] ;

function totalItemFunc(arg){
  totalItem = arg;
  console.log("totalfunc", totalItem[0].length);
}


function Home() {

  console.log("inside homess",totalItem);
  
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!

            </h3>
          </CardTitle>
          <CardTitle>
            <h3 className="font-weight-bold"> <br/>
              <div> {} Snacks Available</div>  <br/>  <div>Drinks Available</div>
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export {totalItemFunc};
export default Home;
