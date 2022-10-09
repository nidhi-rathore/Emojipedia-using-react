import React, { useState } from "react";
import emojipedia from "../emojipedia";
function SearchEmoji() {
  const [search, setSearch] = useState("");
  const [emoji, setEmoji] = useState("");
  // seacrh the emoji and displqay name and meaning of the emoji

  function handleChange(event) {
    const search = event.target.value;
    setSearch(search);
    const emoji = emojipedia.find((emoji) => emoji.emoji === search);
    setEmoji(emoji);
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
            {emoji !== undefined ? (
              <div className="term">
                <dt>
                  <span className="emoji" role="img" aria-label="Tense Biceps">
                    {emoji?.emoji}
                  </span>
                  <span>{emoji?.name}</span>
                </dt>
                <dd>{emoji?.meaning}</dd>
              </div>
            ) : (
              <div className="term">
                <dt>
                  <span className="emoji" role="img" aria-label="Tense Biceps">
                    {search}
                  </span>
                  <span>Not Found</span>
                </dt>
                <dd>This Emoji is not Found</dd>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchEmoji;
