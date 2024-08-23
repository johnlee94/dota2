import React, { useState, useEffect } from "react";

const Meme = () => {
  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = useState({
    url: allMemes[0]?.url,
    topText: "",
    bottomText: "",
  });

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        if (!response.ok)
          throw new Error(`Network Request Error: Status ${response.status}`);
        const data = await response.json();
        if (!data.success)
          throw new Error(`Data handling error: ${data.error}`);
        console.log(data.data.memes);
        setAllMemes(data.data.memes);
      } catch (err) {
        console.error("Error fetching memes: ", err);
      }
    };

    fetchMemes();
  }, []);

  useEffect(() => {
    if(allMemes.length) {
      setMeme(prev => ({
        ...prev,
        url: allMemes[0].url
      }))
    }
  }, [allMemes])

  const handleClick = () => {
    setMeme((prev) => ({
      ...prev,
      url: allMemes[Math.floor(Math.random() * allMemes.length)].url,
    }));
  };

  const handleChange = (event) => {
    const {name, value} = event.target;

    setMeme(prev => ({
      ...prev,
      [name] : value
    }))
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={handleClick }>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.url} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
