import React from "react";
import Meanings from "./Meanings.js";
import Images from "./Images.js";
export default function Result(props) {
  //2 loop through the new Map, and pass it to component Meaning. JS to be displayed
  if (props.loaded === true) {
    //renders the meanings object to be categorized by part of speech
    function categorizeByPartOfSpeech(meanings) {
      let beautifiedPartOfSpeech = {};

      //meanings return an ARRAY of objexts
      for (let currentMeaningObject of meanings) {
        let partOfSpeech = currentMeaningObject.partOfSpeech;
        // Check if the key exists in beautifiedPartOfSpeech

        if (!beautifiedPartOfSpeech.hasOwnProperty(partOfSpeech)) {
          beautifiedPartOfSpeech[partOfSpeech] = [];
        }

        // Retrieve the array associated with the part of speech
        const meaningArray = beautifiedPartOfSpeech[partOfSpeech];

        //meaningArray.concat(meaningArray);
        // Ensure meaningArray is not undefined
        if (meaningArray !== undefined) {
          // Push the currentMeaningObject into the array
          meaningArray.push(currentMeaningObject);

          beautifiedPartOfSpeech[partOfSpeech] = meaningArray;
        } else {
          console.error(
            `Meaning array is undefined for part of speech: ${partOfSpeech}`
          );
        }
      }

      return beautifiedPartOfSpeech;
    }

    let newMeanings = categorizeByPartOfSpeech(props.searchResults.meanings);

    //<PartOfSpeech meanings={props.meaning} />;
    return (
      <div className="Result">
        <h1 className="main-word">{props.searchResults.word}</h1>
        <h2 className="phonetic">{props.searchResults.phonetic}</h2>
        <div>
          {Object.keys(newMeanings).map((partOfSpeech) => (
            <div key={partOfSpeech}>
              <div className="partOfSpeech">{partOfSpeech}</div>
              <ul>
                {newMeanings[partOfSpeech].map((meaning, index) => (
                  <div key={index}>
                    <Meanings meaning={meaning} />
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Images photos={props.images} />
      </div>
    );
  } else {
    return null;
  }
}
