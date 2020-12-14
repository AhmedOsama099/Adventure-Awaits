import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/Images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/Images/img-2.jpg"
              text="Travrel through the Islands of Bali in aprivate cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/Images/img-3.jpg"
              text="Set sail in the Atlantic Ocean visiting uncharted waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="/Images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/Images/img-8.jpg"
              text="Ride through the sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
