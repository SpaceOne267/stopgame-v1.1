// components/layout.js
import Layout from "../layout";
import pi from "../../assets/img/user.webp";
import { Gear, Person } from "react-bootstrap-icons";
// css
import "../../assets/css/user/user.layout.css";
import { useEffect } from "react";
export default function UserLayout({ children }) {
  const wpath = window.location.pathname;
  useEffect(() => {
    const _tabs = document.querySelectorAll(".wrap ._tabs li a");
    if (wpath === "/user") {
      _tabs[0].classList.add("_tab-active");
    } else if (wpath === "/user/compilations") {
      _tabs[1].classList.add("_tab-active");
    } else if (wpath === "/user/favorite") {
      _tabs[2].classList.add("_tab-active");
    } else if (wpath === "/user/subcribtions") {
      _tabs[3].classList.add("_tab-active");
    }
  });

  return (
    <>
      <Layout>
        <main className="container profile_main">
          <div className="wrap">
            <div className="block poster_empty"></div>
            {/* _header */}
            <div className="_header">
              <div className="left">
                <picture>
                  <img src={pi} alt="" />
                </picture>
                <div className="_header_info">
                  <div className="rating">
                    <div className="badge">0</div>
                  </div>
                  <div className="username">
                    <h1>UserName</h1>
                  </div>
                  <div className="info">
                    <button className="btn">обо мне</button>
                  </div>
                  <div className="subcribers">
                    <span>
                      <Person />
                      Подписчики
                      <span>0</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="right">
                <span className="last_online">
                  Последнее посещение: Сегодня
                </span>
                <a href="#settings">
                  <Gear />
                </a>
              </div>
            </div>
            {/* _tabs */}
            <ul className="_tabs">
              <li>
                <a href="/user" className="a_main">
                  Главная
                </a>
                {/* _tab-active */}
              </li>
              <li>
                <a href="/user/compilations" className="a_compilations">
                  Подборки Игр
                  <sup>0</sup>
                </a>
              </li>
              <li>
                <a href="/user/favorite" className="a_favorite">
                  Закладки
                </a>
              </li>
              <li>
                <a href="/user/subcribtions" className="a_subcribes">
                  Подписки
                </a>
              </li>
            </ul>
            {/* content */}
            <section className="_content">{children}</section>
          </div>
        </main>
      </Layout>
    </>
  );
}
