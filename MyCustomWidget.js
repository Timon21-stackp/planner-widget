import React, { useState, useEffect } from 'react';

const MyCustomWidget = () => {
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  const getUserCoordinates = () => {
    if (!navigator.geolocation) {
      setError('Geolocation API is not available in your browser!');
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ latitude, longitude });
        },
        (error) => {
          setError('Something went wrong getting your position!');
        }
      );
    }
  };

  useEffect(() => {
    getUserCoordinates();
  }, []);

  return (
    <div className="App">
      {error ? (
        <p>{error}</p>
      ) : coordinates ? (
        <p>Your coordinates are: [{coordinates.latitude}, {coordinates.longitude}]</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyCustomWidget;
