import React from "react";

export default function Meanings(props) {
  function beautifySynonyms(synonyms) {
    if (synonyms !== null) {
      return (
        <div>
          <div>Synonyms</div>
          {synonyms.join("  ")}
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
