import React from "react";
import Meanings from "./Meanings.js";
export default function Result(props) {
  if (props.loaded === true) {
    console.log(`api result; ${props.searchResults.word}`);
    return (
      <div className="Result">
        <h1 className="main-word">{props.searchResults.word}</h1>
        <h2 className="phonetic">{props.searchResults.phonetic}</h2>
        {props.searchResults.meanings.map((meaning, index) => {
          console.log(meaning);
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
