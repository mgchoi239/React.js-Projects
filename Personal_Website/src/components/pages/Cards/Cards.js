import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/CFC.jpg"
              duration="'19 Nov - '21 May"
              role="Interpreter/Translator"
              location="Combined Forces Command"
              path="https://namu.wiki/w/%ED%95%9C%EB%AF%B8%EC%97%B0%ED%95%A9%EA%B5%B0%EC%82%AC%EB%A0%B9%EB%B6%80"
            />
            <CardItem
              src="images/SNUH.jpg"
              duration="'19 May - '19 Sept"
              role="Research Assistant"
              location="Seoul National University Hospital"
              path="http://bpal.snu.ac.kr/kr/index.php"
            />
            <CardItem
              src="images/Yonsei.jpg"
              duration="'18 May - '18 Aug"
              role="Research Assistant"
              location="Yonsei University"
              path="http://hjchoi.yonsei.ac.kr/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
