import React from "react";
import i from "../assets/img/img2.webp";

// bootsrap icons
import {
  ExclamationCircle,
  BookmarkPlus,
  ChatDots,
  FileText,
} from "react-bootstrap-icons";
// css
import "../assets/css/article.card.css";
const GetArticles = (data, cat, c) => {
  return (
    <>
      <article className="article_card">
        <a href="/" className="img">
          <img src={i} alt="i" />
        </a>
        <div className="content">
          <div className="post_info">
            <span className="category">
              <FileText />
              Блог
            </span>
            <a href="/#author" className="author">
              Dantoskin
            </a>
          </div>
          <a href="/" className="block title">
            Russian Doomcon (30-летие игры Doom) в Санк-Петербурге да это так и
            есть на самом деле
          </a>
          <div className="info">
            <span className="pubdate">Вчера</span>
            <div className="options">
              <button className="complain">
                <ExclamationCircle />
              </button>
              <button className="bookmark">
                <BookmarkPlus />
              </button>
              <a href="/#comments" className="comments_count">
                <ChatDots />4
              </a>
            </div>
          </div>
        </div>
      </article>
      {/* --- */}
      <article className="article_card">
        <a href="/" className="img">
          <img src={i} alt="i" />
        </a>
        <div className="content">
          <div className="post_info">
            <span className="category">
              <FileText />
              Блог
            </span>
            <a href="/#author" className="author">
              Dantoskin
            </a>
          </div>
          <a href="/" className="block title">
            Russian Doomcon (30-летие игры Doom) в Санк-Петербурге
          </a>
          <div className="info">
            <span className="pubdate">Вчера</span>
            <div className="float-r options">
              <button className="complain">
                <ExclamationCircle />
              </button>
              <button className="bookmark">
                <BookmarkPlus />
              </button>
              <a href="/#comments" className="comments_count">
                <ChatDots />4
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default GetArticles;
