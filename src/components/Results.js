import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  // console.log("Results props.results", props.results);

  if (props.results) {
    let meanings = props.results.meanings;
    return (
      <div className="Results">
        <h1>{props.results.word}</h1>
        {meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
