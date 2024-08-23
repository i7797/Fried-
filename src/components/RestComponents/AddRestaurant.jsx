import React, { useState } from 'react';

function AddRestaurant({ addRestaurant }) {
  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    location: '',
    rating: 50,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newRestaurant.name || !newRestaurant.location) return;
    addRestaurant(newRestaurant);
    setNewRestaurant({ name: '', location: '', rating: 50 });
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h2>Add New Restaurant</h2>
      <input
        type="text"
        placeholder="name"
        value={newRestaurant.name}
        onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="location"
        value={newRestaurant.location}
        onChange={(e) => setNewRestaurant({ ...newRestaurant, location: e.target.value })}
      />
      <br />
      <label>Rate the restaurant from 1 to 100:</label>
      <input
        type="range"
        min="1"
        max="100"
        value={newRestaurant.rating}
        onChange={(e) => setNewRestaurant({ ...newRestaurant, rating: e.target.value })}
      />
      <br />
      <button type="submit">Add New Restaurant</button>
    </form>
  );
}

export default AddRestaurant;
