import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
function Cards() {
  return (
    <>
      <div className="cards">
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards-container">
          <div className="cards-wrapper">
            <CardItem
              path="/sign-up"
              src="images/img-9.jpg"
              label="Adventure"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
            />
            <CardItem
              path="/sign-up"
              src="images/img-2.jpg"
              label="Luxury"
              text="Travel through the Islands of Bali in a Private Cruise"
            />
          </div>
          <div className="cards-wrapper">
            <CardItem
              path="/sign-up"
              src="images/img-3.jpg"
              label="Mystery"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
            />
            <CardItem
              path="/sign-up"
              src="images/img-4.jpg"
              label="Scenery"
              text="Experience Football on Top of the Himilayan Mountains"
            />
            <CardItem
              path="/sign-up"
              src="images/img-8.jpg"
              label="Adrenaline"
              text="Ride through the Sahara Desert on a guided camel tour"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
