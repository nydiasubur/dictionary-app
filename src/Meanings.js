import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <div className="definition">{props.meaning.partOfSpeech}</div>
      <div className="definition">{props.meaning.definition}</div>
      <div className="example">{props.meaning.example}</div>
      <div className="synonyms">{props.meaning.synonyms}</div>
    </div>
  );
}
