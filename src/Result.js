import React from "react";
import Meanings from "./Meanings.js";
export default function Result(props) {
  if (props.loaded === true) {
    console.log(`api result; ${props.searchResults.word}`);
    return (
      <div className="Result">
        <h1>{props.searchResults.word}</h1>
        <h2>{props.searchResults.phonetic}</h2>
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
    return "what";
  }
}
