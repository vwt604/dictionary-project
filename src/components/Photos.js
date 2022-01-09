import React from "react";
import "./Photos.css";

export default function Photos(props) {
  let photos = props.photos;
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="container">
          <div className="row">
            {photos.map(function (photo, index) {
              return (
                <div className="col-md-4" key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.landscape}
                      alt={photo.alt}
                      className="img-fluid"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
