import React, { useState } from "react";

function RestaurantItem({ restaurant, deleteRestaurant, updateRestaurant }) {
  const [editing, setEditing] = useState(false);
  const [newRating, setNewRating] = useState(restaurant.rating);

  const handleUpdate = () => {
    updateRestaurant(restaurant.id, newRating);
    setEditing(false);
  };

  return (
    <>
    
      <div className=" flex flex-col items-center border-2 border-pink-400 bg-white shadow-md text-center mb-6 rounded-lg p-4 ">
        <img
          src="https://www.177milkstreet.com/assets/site/Recipes/_large/Korean-Fried-Chicken-Dakgangjeong.jpg"
          alt={restaurant.name}
          className="w-24 h-24 mx-auto object-cover mb-4 rounded"
        />
        <h3 className="text-xl mb-2 font-mono">{restaurant.name}</h3>
        <p className="text-gray-700 mb-1">
          <b>Location:</b> {restaurant.location}
        </p>
        <p className="text-gray-700 mb-4">
          <b>Rate:</b>
          {"⭐".repeat(Math.round(newRating / 20))} {newRating}
        </p>

        {editing ? (
          <>
            <input
              type="range"
              min="1"
              max="100"
              value={newRating}
              onChange={(e) => setNewRating(e.target.value)}
              className="w-full mb-2"
            />
            <button
              className="bg-blue-400 text-white px-4 py-2 rounded-lg  hover:bg-blue-600 transition"
              onClick={handleUpdate}
            >
              Save
            </button>
          </>
        ) : (
          <>
            <div className="space-x-6">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg  hover:bg-yellow-400 transition"
                onClick={() => setEditing(true)}
              >
                Change Rate
              </button>
              <button
                className="bg-blue-700 text-white px-4 py-2 rounded-lg  hover:bg-yellow-400 transition"
                onClick={() => deleteRestaurant(restaurant.id)}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default RestaurantItem;
