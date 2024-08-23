import React, { useState } from "react";
import AddRestaurant from "./RestComponents/AddRestaurant";
import RestaurantList from "./RestComponents/RestaurantList";

function Restaurant() {
  const [restaurants, setRestaurants] = useState([
    { id: 1, name: "Fried chicken", location: "Mansour", rating: 100 },
  ]);

  const addRestaurant = (restaurant) => {
    const newId = Date.now();
    setRestaurants([...restaurants, { id: newId, ...restaurant }]);
  };

  {
    /* this give me a new refrence to resturentS and new id of the new object and its properties ...resturent - like name location and raiting  */
  }
  const deleteRestaurant = (id) => {
    setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
  };

  const updateRestaurant = (id, newRating) => {
    setRestaurants(
      restaurants.map((restaurant) =>
        restaurant.id === id ? { ...restaurant, rating: newRating } : restaurant
      )
    );
  };

  return (
    <div className="mt-40">
      <AddRestaurant addRestaurant={addRestaurant} />
      <RestaurantList
        restaurants={restaurants}
        deleteRestaurant={deleteRestaurant}
        updateRestaurant={updateRestaurant}
      />
    </div>
  );
}

export default Restaurant;
