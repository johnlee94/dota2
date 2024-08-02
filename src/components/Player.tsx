import React, { useEffect, useState, useCallback } from "react";
import debounce from 'lodash.debounce';

const Player = () => {
  const [player, setPlayer] = useState(null);
  const [playerId, setPlayerId] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://api.opendota.com/api/players")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Network Request Error Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setPlayer(data);
//         console.log("data", data);
//         console.log("player", player);
//       })
//       .catch((error) => {
//         console.log("error", error);
//       });
//   }, []);

  // const handleDebouncedInputChange = useCallback(
  //   debounce((value) => {
  //       setPlayerId(value);
  //       console.log('player id', playerId)
  //   }, 500),
  //   []
  // );

  const handleInputChange = (event) => {
    const { value } = event.target;

    setPlayerId(value)
    // handleDebouncedInputChange(event.target.value);
    console.log('player id', value)
  }

  const handleSubmit = async () => {
    try {
        const response = await fetch(`https://api.opendota.com/api/players/${playerId}`)

        if (!response.ok) {
            setPlayer(null);
            throw new Error(`Network Request Error Status: ${response.status}`)
        }

        const data = await response.json();

        setPlayer(data);
        console.log('player data', data);
    } catch(error) {
        console.log('error occured: ', error.message)
    }
  };

  const debouncedHandleSubmit = useCallback(debounce(handleSubmit, 300), [])

  return (
    <div>
      {player !== null ? (
        <div>{JSON.stringify(player.profile.personaname)}</div> // @ts-ignore
      ) : (
        <div>Missing Player Info</div>
      )}
      <div>
        <input type="text" value={playerId} onChange={handleInputChange} placeholder="Enter Player Id Here" />
        <button onClick={debouncedHandleSubmit}>Search Player</button>
      </div>
    </div>
  );
};

export default Player;
