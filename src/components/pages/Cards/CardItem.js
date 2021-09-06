import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <a href={props.path} className="hyperlink">
            <figure
              className="cards__item__pic-wrap"
              data-category={props.label}
            >
              <img
                src={props.src}
                alt="not working"
                className="cards__item__img"
              />
            </figure>
            <div className="cards__item__info">
              <h5 className="cards__item__text">{props.duration}</h5>
              <h5 className="cards__item__text">{props.role}</h5>
              <h5 className="cards__item__text">{props.location}</h5>
            </div>
          </a>
        </div>
      </li>
    </>
  );
}

export default CardItem;
