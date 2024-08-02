import React, { useState, useEffect } from "react";

export default function Heroes() {
  const [AllHeroesData, setAllHeroesData] = useState([]);
  const [heroStats, setHeroStats] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async() => {
    const heroes = await fetchData('https://api.opendota.com/api/heroes')

    setAllHeroesData(heroes)

    const heroStats = await fetchData('https://api.opendota.com/api/heroStats')

    setHeroStats(heroStats)
  }

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);

      if (!response.ok) throw new Error(`Network Responded with Status: ${response.status}`)

      const data = await response.json()
      
      console.log('fetched data', data)
      return data
    } catch(err) {
      console.log('error occured: ', err);
    }
  }

  useEffect(() => {
    if (AllHeroesData.length > 0) {
      console.log("heroes data", AllHeroesData);
    }
    if (heroStats.length > 0) {
      console.log("hero stats data", heroStats);
    }
  }, [AllHeroesData, heroStats]);

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
