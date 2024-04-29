import React, { useState } from "react";

export default function Dictionary() {
  let [currentSearch, setCurrentSearch] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert("searching");
  }
  function updateSearch(event) {
    event.preventDefault();
    setCurrentSearch(event.target.value);
    console.log(currentSearch);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" autoFocus={true} onChange={updateSearch} />
      </form>
    </div>
  );
}
