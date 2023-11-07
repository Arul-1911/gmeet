import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Pricing from './Example';

function App() {

  let plandetails = [{
title : "Free",
amount : 0,
user : "Single User",
storage : "5gb Storage",
public_projects :"Unlimited public projects",
access : "Community access" ,
sub_domain : "Free Sub-Domain",
status : " Monthly Status Reports",
paid : true,
amt : true
  },
{
 title : "paid",
amount : 15,
user : "Three Users",
storage : "25gb Storage",
public_projects :"Unlimited public projects",
access : "Community access" ,
sub_domain : "Free Sub-Domain",
status : " Monthly Status Reports",
paid : false,
amt : true

},
{
  title : "Premium",
  amount : 100,
  user : "Multiple Users",
  storage : "150gb Storage",
  public_projects :"Unlimited public projects",
  access : "Community access" ,
  sub_domain : "Free Sub-Domain",
  status : " Monthly Status Reports",
  paid : false,
  amt: false
}]
  return (
    <div className="container_1">
    <section className="pricing">
      <div className="container">
        <div className="row">
    {
      plandetails.map((detail) => {
        return <Pricing details={detail}></Pricing>
      })
    }
 
        </div>
      </div>
    </section>
     </div>
  );
}

export default App;