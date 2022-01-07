import React from "react";

export default function Synonyms(props) {
  console.log(props);
  let synonyms = props.synonyms;
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props[0]}
        {synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
