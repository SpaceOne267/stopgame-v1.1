import React from "react";

// icons
import { ChatDots } from "react-bootstrap-icons";
// img
import i from "../assets/img/poster.webp";
// css
import "../assets/css/bigCard.css";
const BigCard = () => {
  return (
    <a href="/#cardNig" className="card_big">
      <div className="img" href="/#cardBig">
        <img src={i} alt="#" />
      </div>
      <div className="content">
        <span className="block category">Первая полоса</span>
        <div className="article">
          <p className="title">Самые интересные релизы декабря</p>
          <div className="block">
            <span className="author">Author Name</span>
            <div className="comments">
              <ChatDots /> 24
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BigCard;
