import React from "react";

const Meme = () => {
  return (
    <main>
      <div className="form">
        <div>
          <label>
            Top Text
            <input type="text" placeholder="Shut up" className="form--input" />
          </label>
        </div>
        <div>
          <label>
            Bottom Text
            <input
              type="text"
              placeholder="and take my money"
              className="form--input"
            />
          </label>
        </div>
        <button className="form--button">Get a new meme image 🖼</button>
      </div>
    </main>
  );
};

export default Meme;
