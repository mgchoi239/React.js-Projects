import React from "react";

function PostItem(props) {
  return (
    <div className="posts__container">
      <h3 className="title">{props.title}</h3>
      <h5 className="date">{props.date}</h5>
      <p className="content">
        <p>{props.p1}</p>
        <p>{props.p2}</p>
        <p>{props.p3}</p>
      </p>
    </div>
  );
}

export default PostItem;
