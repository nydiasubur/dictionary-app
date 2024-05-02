import React from "react";
import "./Meaning.css";
export default function Meanings(props) {
  //check if synonyms exist and render the synonyms in array seperated by double space
  function beautifySynonyms(synonyms) {
    if (synonyms !== null) {
      return (
        <div>
          <span>Synonyms: </span>
          {synonyms.join(", ")}
        </div>
      );
    }
  }
  function displayExample(example) {
    if (example !== null) {
      return <span>"{example}"</span>;
    }
  }
  return (
    <div className="Meanings">
      <div className="partOfSpeech">{props.meaning.partOfSpeech}</div>
      <div className="definition">{props.meaning.definition}</div>
      <div className="example">{displayExample(props.meaning.example)}</div>
      <div className="synonyms">{beautifySynonyms(props.meaning.synonyms)}</div>
    </div>
  );
}
