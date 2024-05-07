import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary() {
  let [currentSearch, setCurrentSearch] = useState("");
  let [searchResults, setSearchResults] = useState({ empty: "empty" });
  let [loaded, setLoaded] = useState(false);
  let [images, setImages] = useState(null);

  // API documentation: https://www.shecodes.io/learn/apis/dictionary

  function handleSubmit(event) {
    event.preventDefault();

    let key = `tc84aadoa14ab4fdf5f3430525cff939`;
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${currentSearch}&key=${key}`;
    axios.get(url).then(displaySearchResult);
    alert("searching..");

    let imageKey = `tc84aadoa14ab4fdf5f3430525cff939`;
    let url2 = `https://api.shecodes.io/images/v1/search?query=${currentSearch}&key=${imageKey}`;
    axios.get(url2).then(displayImageResult);
  }
  function updateSearch(event) {
    event.preventDefault();
    console.log(`event ${event.target.value}`);
    setCurrentSearch(event.target.value);
  }

  function displaySearchResult(response) {
    // store the search results from the API to the 'searchResults' state to pass to 'Result.js` component
    setSearchResults(response.data);
    setLoaded(true);
  }
  function displayImageResult(response) {
    //console.log(JSON.stringify(response.data.photos));
    setImages(response.data.photos);
    // console.log(JSON.stringify(images));
  }

  return (
    <div className="Dictionary">
      <h1 className="header"> Dictionary </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="input"
          placeholder="meaning"
          autoFocus={true}
          onChange={updateSearch}
        />
      </form>
      <Result searchResults={searchResults} images={images} loaded={loaded} />
    </div>
  );
}
