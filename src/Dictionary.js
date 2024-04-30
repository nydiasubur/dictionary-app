import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [currentSearch, setCurrentSearch] = useState("");
  let key = `tc84aadoa14ab4fdf5f3430525cff939`;
  // API documentation: https://www.shecodes.io/learn/apis/dictionary
  let url = `https://api.shecodes.io/dictionary/v1/define?word=${currentSearch}&key=${key}`;
  function handleSubmit(event) {
    event.preventDefault();

    axios.get(url).then(displaySearchResult);
    alert("searching");
  }
  function updateSearch(event) {
    event.preventDefault();
    setCurrentSearch(event.target.value);
    console.log(currentSearch);
  }

  function displaySearchResult(response) {
    console.log(`api result; ${response.data.word}`);
    console.log(url);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" autoFocus={true} onChange={updateSearch} />
      </form>
    </div>
  );
}
