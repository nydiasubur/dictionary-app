import React from "react";

//renders the meanings object to be categorized by part of speech
function PartOfSpeech(meanings) {
  let beautifiedPartOfSpeech = {};
  //meanings return an ARRAY of objexts
  for (currentMeaningObjext of meanings) {
    if (beautifiedPartOfSpeech.has(currentMeaningObjext.PartOfSpeech)) {
      beautifiedPartOfSpeech[currentMeaningObjext.PartOfSpeech] = [];
    }
    beautifiedPartOfSpeech[currentMeaningObjext.PartOfSpeech].add(
      currentMeaningObjext
    );
  }
  return (
    <div>
      <div className="partOfSpeech">{props.meaning}</div>
      <div className="definition">{props.meaning.definition}</div>
      <div className="example">{displayExample(props.meaning.example)}</div>
      <div className="synonyms">{beautifySynonyms(props.meaning.synonyms)}</div>
    </div>
  );
}
