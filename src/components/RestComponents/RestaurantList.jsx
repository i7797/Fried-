import React from 'react';
import RestaurantItem from './RestaurantItem';

function RestaurantList({ restaurants, deleteRestaurant, updateRestaurant }) {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          restaurant={restaurant}
          deleteRestaurant={deleteRestaurant}
          updateRestaurant={updateRestaurant}
        />
      ))}
    </div>
  );
}

export default RestaurantList;
