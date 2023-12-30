import React from "react";
import "../assets/css/last_news.css";
import i from "../assets/img/img.webp";

import { ChatDots, Dot } from "react-bootstrap-icons";

export default function LastNews() {
  return (
    <div className="last_news">
      <h2 className="block widget-title">Последние новости</h2>
      <div className="articles">
        <a className="article" href="/post">
          <img src={i} alt="" />
          <div className="content">
            <div className="info">
              <span className="pubdate">Вчера,23:39</span>
              <span className="dot">
                <Dot />
              </span>
              <span className="comments">
                <ChatDots />
                18
              </span>
            </div>
            <span className="title">
              Авторы Elden Ring сравнили грядущее DLC с расширением для
              Bloodborne
            </span>
          </div>
        </a>
        {/*  */}
        <a className="article" href="/post">
          <img src={i} alt="" />
          <div className="content">
            <div className="info">
              <span className="pubdate">Вчера,23:39</span>
              <span className="dot">
                <Dot />
              </span>
              <span className="comments">
                <ChatDots />
                18
              </span>
            </div>
            <span className="title">
              Авторы Elden Ring сравнили грядущее DLC с расширением для
              Bloodborne
            </span>
          </div>
        </a>
        <a className="article" href="/post">
          <img src={i} alt="" />
          <div className="content">
            <div className="info">
              <span className="pubdate">Вчера,23:39</span>
              <span className="dot">
                <Dot />
              </span>
              <span className="comments">
                <ChatDots />
                18
              </span>
            </div>
            <span className="title">
              Авторы Elden Ring сравнили грядущее DLC с расширением для
              Bloodborne
            </span>
          </div>
        </a>
        {/*  */}
        <a className="article" href="/post">
          <img src={i} alt="" />
          <div className="content">
            <div className="info">
              <span className="pubdate">Вчера,23:39</span>
              <span className="dot">
                <Dot />
              </span>
              <span className="comments">
                <ChatDots />
                18
              </span>
            </div>
            <span className="title">
              Авторы Elden Ring сравнили грядущее DLC с расширением для
              Bloodborne
            </span>
          </div>
        </a>
        <a className="article" href="/post">
          <img src={i} alt="" />
          <div className="content">
            <div className="info">
              <span className="pubdate">Вчера,23:39</span>
              <span className="dot">
                <Dot />
              </span>
              <span className="comments">
                <ChatDots />
                18
              </span>
            </div>
            <span className="title">
              Авторы Elden Ring сравнили грядущее DLC с расширением для
              Bloodborne
            </span>
          </div>
        </a>
        {/*  */}
        <a className="article" href="/post">
          <img src={i} alt="" />
          <div className="content">
            <div className="info">
              <span className="pubdate">Вчера,23:39</span>
              <span className="dot">
                <Dot />
              </span>
              <span className="comments">
                <ChatDots />
                18
              </span>
            </div>
            <span className="title">
              Авторы Elden Ring сравнили грядущее DLC с расширением для
              Bloodborne
            </span>
          </div>
        </a>
      </div>
      {/* more-button */}
      <button className="block hover-o more_btn">Посмотреть ещё</button>
    </div>
  );
}
