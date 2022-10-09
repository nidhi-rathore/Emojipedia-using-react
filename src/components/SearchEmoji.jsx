import React, { useState } from "react";
import emojipedia from "../emojipedia";
function SearchEmoji() {
  const [search, setSearch] = useState("");
  const [emoji, setEmoji] = useState();
  // seacrh the emoji and displqay name and meaning of the emoji
  function handleChange(event) {
    const search = event.target.value;

    setSearch(search);
    emojipedia.map((emoji) => {
      if (emoji.emoji === search) {
        setEmoji(emoji);
      } else {
        setEmoji(null);
      }
    });
  }

  return (
    <div className=" seachbox">
      <div
        className="search"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input type="text" placeholder="Search" onChange={handleChange} />

        {search && (
          <div className="search-result dictionary">
            <div className="term">
              <dt>
                <span className="emoji" role="img" aria-label="Tense Biceps">
                  {emoji?.emoji}
                </span>
                <span>{emoji?.name}</span>
              </dt>
              <dd>{emoji?.meaning}</dd>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchEmoji;
