import React, { useState } from "react";

function AddRestaurant({ addRestaurant }) {
  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    location: "",
    rating: 50,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newRestaurant.name || !newRestaurant.location) return;
    addRestaurant(newRestaurant);
    setNewRestaurant({ name: "", location: "", rating: 50 });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" text-center shadow-md w-full p-2 rounded-lg "

      >
        <h2 className=" text-2xl font-bold m-4 text-pink-600">Add New Restaurant</h2>
        <div className='flex flex-col'>

        <input
          type="text"
          placeholder="name"
          value={newRestaurant.name}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, name: e.target.value })
          }
          className="w-[50%] mx-auto  p-2 border-2 border-gray-300 rounded-lg "
          
        />
        <input
          type="text"
          placeholder="location"
          value={newRestaurant.location}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, location: e.target.value })
          }
          className=" w-[50%] mx-auto   p-2 border-2 border-gray-300 rounded-lg "
        />
                </div>

        <br />
        <div className='flex flex-col'>
        <label>Rate the restaurant from 1 to 100:</label>
        <input
          type="range"
          min="1"
          max="100"
          value={newRestaurant.rating}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, rating: e.target.value })
          }
          className="w-[50%] mx-auto p-2 border-2 border-gray-500 rounded"
        />
        <br />
        </div>
        <button
          type="submit"
          className="bg-blue-500 p-2 rounded-xl text-white"
        >
          Add New Restaurant
        </button>
      </form>
    </>
  );
}

export default AddRestaurant;
