import React, { useState } from "react";

export default function Dictionary() {
  let [currentSearch, setCurrentSearch] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert("searching");
  }
  function updateSearch(event) {
    event.preventDefault();
    console.log(event.target.value);
    //setCurrentSearch(event.data);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" autoFocus={true} onChange={updateSearch} />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
