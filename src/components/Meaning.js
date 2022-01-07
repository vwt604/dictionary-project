import React from "react";

export default function Meaning(props) {
  console.log("Meaning props", props);
  let definitions = props.meaning.definitions;
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <em>{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}
