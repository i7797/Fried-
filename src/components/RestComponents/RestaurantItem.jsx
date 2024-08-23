import React, { useState } from 'react';

function RestaurantItem({ restaurant, deleteRestaurant, updateRestaurant }) {
  const [editing, setEditing] = useState(false);
  const [newRating, setNewRating] = useState(restaurant.rating);

  const handleUpdate = () => {
    updateRestaurant(restaurant.id, newRating);
    setEditing(false);
  };

  return (
<div style={{ border: "2px solid blue", textAlign: 'center', marginBottom: '20px' }}>
<img
     
        src="https://www.177milkstreet.com/assets/site/Recipes/_large/Korean-Fried-Chicken-Dakgangjeong.jpg"
        alt={restaurant.name}
        style={{ width:"100px", display: 'block', margin: '0 auto' }}
      />
      <h3>{restaurant.name}</h3>
      <p><b>Location:</b> {restaurant.location}</p>
      <p><b>Rate:</b> 
      {'⭐'.repeat(Math.round(newRating / 20))} {newRating}
      </p>

      {editing ? (
        <>
          <input
            type="range"
            min="1"
            max="100"
            value={newRating}
            onChange={(e) => setNewRating(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <button onClick={() => setEditing(true)}>Change Rate</button>
          <button onClick={() => deleteRestaurant(restaurant.id)}>Delete</button>
        </>
      )}
    
    </div>
  );
}

export default RestaurantItem;
