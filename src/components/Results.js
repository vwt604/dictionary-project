import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  // console.log("Results props.results", props.results);

  if (props.results) {
    let meanings = props.results.meanings;
    let phonetics = props.results.phonetics;
    console.log(props.results);
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>

        {meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
              <br />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
