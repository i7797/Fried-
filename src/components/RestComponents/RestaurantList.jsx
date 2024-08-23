import React from 'react';
import RestaurantItem from './RestaurantItem';

function RestaurantList({ restaurants, deleteRestaurant, updateRestaurant }) {
  return (
    <div className='min-h-screen p-4 bg-slate-300 '>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      {restaurants.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          restaurant={restaurant}
          deleteRestaurant={deleteRestaurant}
          updateRestaurant={updateRestaurant}
        />
      ))}
      
      </div>

    </div>
  );
}

export default RestaurantList;
