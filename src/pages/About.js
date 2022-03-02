import React from "react";
import MultiplePizzas from "../assets/masala.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Online website where you can order pure indian style food items,
          we provide the best quality food items with best taste which satisfies 
          your food needs. We are here to provide the best quality food anytime 
          24/7 with same quality. We are provide dinnering service also at our resturant. 
          Please visit to experiense our dinning.
          

        
        </p>
      </div>
    </div>
  );
}

export default About;
