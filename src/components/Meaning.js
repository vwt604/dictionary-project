import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log("Meaning props", props);
  let definitions = props.meaning.definitions;
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong>Definition:</strong> <p>{definition.definition}</p>
            <strong>Example:</strong> <em>{definition.example}</em>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
