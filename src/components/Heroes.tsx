import React, { useState, useEffect } from "react";

export default function Heroes() {
  const [AllHeroesData, setAllHeroesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.opendota.com/api/heroes")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `network request errored! status: ${response.status}`
          );
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setAllHeroesData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (AllHeroesData.length > 0) {
      console.log("heroes data", AllHeroesData);
    }
  }, [AllHeroesData]);

  return (
    <>
      <div>{error}</div>
      {loading && error !== null ? (
        <div>Loading</div>
      ) : (
        <div>Heroes Data Loaded</div>
      )}
    </>
  );
}
