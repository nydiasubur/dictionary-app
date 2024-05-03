import React from "react";
import Meanings from "./Meanings.js";
export default function Result(props) {
  //2 loop through the new Map, and pass it to component Meaning. JS to be displayed
  if (props.loaded === true) {
    //renders the meanings object to be categorized by part of speech
    function categorizeByPartOfSpeech(meanings) {
      console.log(JSON.stringify(props.searchResults.meanings));

      let beautifiedPartOfSpeech = new Map();
      console.log(JSON.stringify(meanings));

      //meanings return an ARRAY of objexts
      for (let currentMeaningObject of meanings) {
        let partOfSpeech = currentMeaningObject.partOfSpeech;
        // Check if the key exists in beautifiedPartOfSpeech
        console.log("Current meaning object:", currentMeaningObject);
        console.log("Part of speech:", currentMeaningObject.partOfSpeech);
        if (!beautifiedPartOfSpeech.has(partOfSpeech)) {
          beautifiedPartOfSpeech[partOfSpeech] = [];
        }
        console.log(
          `1)beautifiedPartOfSpeech: ${JSON.stringify(beautifiedPartOfSpeech)}`
        );
        // Retrieve the array associated with the part of speech
        const meaningArray = beautifiedPartOfSpeech[partOfSpeech];
        console.log(
          `2)beautifiedPartOfSpeech: ${JSON.stringify(beautifiedPartOfSpeech)}`
        );
        //meaningArray.concat(meaningArray);
        // Ensure meaningArray is not undefined
        if (meaningArray !== undefined) {
          // Push the currentMeaningObject into the array
          meaningArray.push(currentMeaningObject);
          console.log(
            `meaningArray.push(currentMeaningObject): ${JSON.stringify(
              meaningArray
            )}`
          );
          beautifiedPartOfSpeech[partOfSpeech] = meaningArray;
          console.log(
            `beautifiedPartOfSpeech: ${JSON.stringify(beautifiedPartOfSpeech)}`
          );
        } else {
          console.error(
            `Meaning array is undefined for part of speech: ${partOfSpeech}`
          );
        }
      }

      return beautifiedPartOfSpeech;
    }

    let newMeanings = categorizeByPartOfSpeech(props.searchResults.meanings);
    console.log(`Final: ${JSON.stringify(newMeanings)}`);

    //<PartOfSpeech meanings={props.meaning} />;
    return (
      <div className="Result">
        <h1 className="main-word">{props.searchResults.word}</h1>
        <h2 className="phonetic">{props.searchResults.phonetic}</h2>
        <div>
          {Object.keys(newMeanings).map((partOfSpeech) => (
            <div key={partOfSpeech}>
              <div className="partOfSpeech">{partOfSpeech}</div>
              {newMeanings[partOfSpeech].map((meaning, index) => (
                <div key={index}>
                  <Meanings meaning={meaning} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
