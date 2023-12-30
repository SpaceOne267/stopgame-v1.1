import React from "react";
import Slider from "../components/Slider";
import LastNews from "../components/last_news";
import GetArticles from "../components/getArticles";
import Layout from "./layout";
//
import {
  LightningCharge,
  ChatText,
  Newspaper,
  Play,
  RecordCircle,
  Gear,
} from "react-bootstrap-icons";
import "../assets/css/home.css";
import BigCard from "../components/bigCard";
import BestNews from "../components/best.news";

const Home = (props) => {
  return (
    <>
      <Layout>
        {/* container */}
        <main className="container _main">
          <div className="block slider_block">
            <Slider />
          </div>
          <section className="main_section">
            <h1 className="block block-title">Всё про видеоигры</h1>
            <aside className="sidebar">
              <section className="s_wrap">
                <div className="block catalog">
                  <span className="title">ПОДБОРКИ</span>
                  <a href="/new" className="new active_tab">
                    <LightningCharge />
                    Свежее
                  </a>
                  <a href="/ineteresting" className="interest">
                    <ChatText />
                    Интересные блоги
                  </a>
                  <a href="/latests" className="lastest_articles ">
                    <Newspaper />
                    Свежие статьи
                  </a>
                  <a href="/infact" className="infact">
                    <Play />
                    Инфакт
                  </a>
                  <a href="/streams" className="streams">
                    <RecordCircle />
                    Записи стримов
                  </a>
                  <hr />
                  <button className="settings">
                    <Gear />
                    Настройки ленты
                  </button>
                  <hr />
                </div>
              </section>
            </aside>
            <div className="wrap">
              <LastNews />
              {/* articles */}
              <div className="article_cards">
                <GetArticles />
              </div>
              <div className="block">
                <BigCard />
              </div>
              <div className="article_cards">
                <GetArticles />
              </div>
              {/* best-news */}
              <div className="block">
                <BestNews />
              </div>
            </div>
          </section>
        </main>
        {/* =========== Footer =============*/}
      </Layout>
    </>
  );
};

export default Home;
