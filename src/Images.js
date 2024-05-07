import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.photos) {
    return (
      <div className="Images">
        <div className="row">
          {props.photos.map(function (photo, index) {
            console.log(props.photos.url);
            return (
              <div className="col-4" key={index}>
                <a href={props.photos.url} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt="image description"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div> it returned null</div>;
  }
}
