import React from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import './Home.css'
const Home = () => {
  const tShirts = useLoaderData();

  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {
                tShirts.map(tShirt=>(
                    <Tshirt key={tShirt._id} tShirt={tShirt}></Tshirt>
                ))
        }
      </div>
      <div className="cart">
        <h1>Order Summary</h1>
      </div>
    </div>
  );
};

export default Home;
