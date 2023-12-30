import React, { useState } from "react";
import {
  Bell,
  BrightnessHigh,
  ChatDots,
  MoonFill,
  Person,
  Search,
  XLg,
  ChevronLeft,
  Envelope,
  Controller,
  JournalBookmark,
  Bookmark,
  FileText,
  PersonCheckFill,
  Gear,
} from "react-bootstrap-icons";

// styles
import "../../assets/css/header.css";
import HeaderLogo from "../svg/headerLogo";
import ava from "../../assets/img/avatar.jpeg";
import Iuser from "../../assets/img/user.webp";
//
// Header
//

//
//
//
const Header = () => {
  // =============================/ functions calling
  // =============================/ body
  const themeData = JSON.parse(localStorage.getItem("theme"));
  const theme = themeData ? themeData : "dark";

  const [newTheme, setNewTheme] = useState(theme);
  const [Search_I, setSearch_I] = useState(<Search />);
  // ==============/ user-menu
  // ==============/body
  let icon;
  if (theme === "dark") {
    icon = <MoonFill color="var(--purple)" />;
  } else {
    icon = <BrightnessHigh color="var(--yellow-rating)" />;
  }
  const [Theme_I, setTheme_I] = useState(icon);

  //
  // Search
  function toggleSearch() {
    const e = document.getElementById("main_search");
    let es = e.style.marginTop;
    if (es === "0px") {
      e.style.marginTop = "-400px";
      setSearch_I(<Search />);
    } else {
      e.style.marginTop = "0px";
      setSearch_I(<XLg color="var(--red)" />);
    }
  }
  // Theme
  function themeIcon(e) {
    if (e === "dark") {
      setTheme_I(<MoonFill color="var(--purple)" />);
    } else {
      setTheme_I(<BrightnessHigh color="var(--yellow-rating)" />);
    }
  }

  function toggleTheme(e) {
    if (newTheme === "dark") {
      setNewTheme("light");
    } else {
      setNewTheme("dark");
    }
    themeIcon(newTheme);

    localStorage.setItem("theme", JSON.stringify(newTheme));
    const app = document.getElementById("app");
    app.dataset.theme = newTheme;
  }
  // modal Register
  function rlwToggle(e) {
    const rlw = document.getElementById("rlw");
    const rlwOverlay = document.getElementById("rlw_overlay");
    if (e) {
      rlw.style.display = "block";
      rlwOverlay.style.display = "block";
      setTimeout(() => {
        rlw.style.top = "50%";
      }, [1]);
    } else {
      rlwOverlay.style.display = "none";
      rlw.style.top = "100%";
      setTimeout(() => {
        rlw.style.display = "none";
      }, [100]);
    }
  }
  function rlwToOption(e) {
    setEmail("");
    setLogin("");
    setPassword("");
    setError1V("");
    setError2V("");
    setError3V("");
    const w = document.getElementById("rlw_wrap");
    const fs = document.getElementById("rlwFormS");
    const fr = document.getElementById("rlwFormR");
    if (e === "sign") {
      fr.style.display = "none";
      fs.style.display = "flex";
      w.style.marginLeft = "-100%";
    } else if (e === "register") {
      fs.style.display = "none";
      fr.style.display = "flex";
      w.style.marginLeft = "-100%";
    } else {
      w.style.marginLeft = "0";
    }
  }
  // user-menu
  function userMenuToggle() {
    const el = document.getElementById("user-menu");
    const wrap = document.querySelector(".main_menu .wrap");
    const wrapL = wrap.offsetLeft;
    const wrapW = wrap.clientWidth;
    const ww = window.innerWidth;
    el.style.right = ww - (wrapL + wrapW) + 22 + "px";

    clickHandler("user-menu", "user-menu-active");
  }
  // clickHandler
  function clickHandler(el, c) {
    const domEl = document.getElementById(el);
    domEl.classList.toggle(c);
  }

  // ======================== / validation /======================/
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error1V, setError1V] = useState("");
  const [error2V, setError2V] = useState("");
  const [error3V, setError3V] = useState("");

  // Email
  function isValidEmail(email) {
    // Простая проверка формата email с использованием регулярного выражения
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length > 5) {
      if (regex.test(email)) {
        setError1V("");
        return true;
      } else {
        setError1V("Введите коректный Email адресс !");
      }
    } else {
      setError1V("Email адресс должен содержать минимум 6 символов");
    }
  }
  // Login
  function isValidLogin(login) {
    // Логин должен содержать только буквы, цифры и подчеркивание
    // и быть не короче 3 символов и не длиннее 20 символов
    const regex = /^[a-zA-Z0-9_]{3,20}$/;
    if (login.length > 3) {
      if (regex.test(login)) {
        setError2V("");
        return true;
      } else {
        setError2V("Введите корректный Логин");
      }
    } else {
      setError2V("Логин должен содержать минимум 4 символа");
      return false;
    }
  }
  // Password
  function isValidPassword(password) {
    // Пароль должен быть не короче 6 символов и содержать хотя бы одну букву и одну цифру
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (password.length > 5) {
      setError3V("");
      return regex.test(password);
    } else {
      setError3V("Пароль должен содержать мининум 6 символов");
      return false;
    }
  }
  const handleLogin = (login, password) => {
    // console.log(login, password);
    if (isValidLogin(login)) {
      console.log("Логин +");
      if (isValidPassword(password)) {
        console.log("Пароль +");
      } else {
        console.log("Пароль -");
      }
    } else {
      console.log("Логин -");
    }
  };

  const handleRegister = (email, login, password) => {
    if (isValidEmail(email)) {
      console.log("Email Verified");
      if (isValidLogin(login)) {
        console.log("Login Verified");
        if (isValidPassword(password)) {
          console.log("Password Verified");
        }
      }
    }
  };

  //
  // ================== / db_contorl /=================//

  //

  return (
    <>
      <header className="main_menu">
        <div className="container wrap">
          <a href="/" className="logo">
            <HeaderLogo />
          </a>
          <nav className="links">
            <a href="/news">Новости</a>
            <a href="/read">Читать</a>
            <a href="/watch">Смотреть</a>
            <a href="/blogs">Блоги</a>
            <a href="/streams">Стримы</a>
            <a href="/games">Игры</a>
            <a href="/cheats">Читы</a>
            <a href="/help">Помощь</a>
          </nav>
          <div className="r_block">
            <button className="search_btn" onClick={() => toggleSearch()}>
              {Search_I}
            </button>
            <button id="theme_btn" className="bg theme" onClick={toggleTheme}>
              {Theme_I}
            </button>
            <button
              className="bg"
              onClick={() => {
                clickHandler("live_comments", "live_comments-active");
              }}
            >
              <ChatDots />
            </button>
            <button className="bg">
              <Bell />
            </button>
            <button
              className="bg login"
              onClick={() => {
                rlwToggle(true);
              }}
            >
              <Person />
            </button>
            <button
              id="user-menu-btn"
              className="bg profile_btn"
              onClick={() => {
                userMenuToggle();
              }}
            >
              <img src={Iuser} alt="user_ava" />
            </button>
          </div>
        </div>
      </header>
      {/* user-menu */}
      <div id="user-menu" className="user-menu">
        <div className="user-profile">
          <a href="/user">
            <picture>
              <img src={Iuser} alt="user_img" />
            </picture>
            <span>Профиль</span>
          </a>
        </div>
        <ul>
          <li>
            <a href="/Сообщения">
              <Envelope />
              Сообщения
            </a>
          </li>
          <li>
            <a href="/Игры">
              <Controller />
              Игры
            </a>
          </li>
          <li>
            <a href="/user/compilations">
              <JournalBookmark /> Мои подборки
            </a>
          </li>
          <li>
            <a href="/user/favorite">
              <Bookmark /> Закладки
            </a>
          </li>
          <li>
            <a href="/user/blogs">
              <FileText /> Мои блоги
            </a>
          </li>
          <li>
            <a href="/Мои_комментарии">
              <ChatDots /> Мои комментарии
            </a>
          </li>
          <li>
            <a href="/user/subcribtions">
              <PersonCheckFill /> Подписки
            </a>
          </li>
          <li>
            <a href="/Настройки">
              <Gear /> Настройки
            </a>
          </li>
        </ul>
        <hr />
        <ul>
          <li>
            <a href="/exit">Выйти</a>
          </li>
        </ul>
      </div>
      {/* main_search_bar */}
      <div id="main_search">
        <div className="overlay"></div>
        <div className="wrap">
          <div className="block search_block">
            <Search />
            <input id="search_input" type="text" placeholder="ПОИСК" />
          </div>
          <div className="catalog">
            <button className="active">Игры</button>
            <button>Пользователи</button>
            <button>Новости</button>
            <button>Блоги</button>
            <button>Статьи</button>
            <button>Видео</button>
            <button>Читы</button>
            <button>Коментарии</button>
            <button>Помощь</button>
          </div>
        </div>
      </div>
      {/* comments window*/}
      <section id="live_comments">
        <div className="block wrap">
          <button
            id="live_comments_close_btn"
            className="close_btn"
            onClick={() => {
              clickHandler("live_comments", "live_comments-active");
            }}
          >
            <XLg />
          </button>
          <h1 className="block-title title">Новые комментарии</h1>
          <div className="block comments">
            <div className="comment">
              <span className="block article_title">Первый трейлер GTA VI</span>
              <div className="block user">
                <img src={ava} alt="" />
                <span className="name">rus1995</span>
              </div>
              <p className="text">
                Почему же этот трейлер ранний? К 5 части трейлер выходил в 2011,
                игра вышла в 2013, почти через 2 года, к РДР2 трейлер тоже за 2
                года выходил.
              </p>
            </div>
            <div className="comment">
              <span className="block article_title">Первый трейлер GTA VI</span>
              <div className="block user">
                <img src={ava} alt="" />
                <span className="name">rus1995</span>
              </div>
              <p className="text">
                Почему же этот трейлер ранний? К 5 части трейлер выходил в 2011,
                игра вышла в 2013, почти через 2 года, к РДР2 трейлер тоже за 2
                года выходил.
              </p>
            </div>
            <div className="comment">
              <span className="block article_title">Первый трейлер GTA VI</span>
              <div className="block user">
                <img src={ava} alt="" />
                <span className="name">rus1995</span>
              </div>
              <p className="text">
                Почему же этот трейлер ранний? К 5 части трейлер выходил в 2011,
                игра вышла в 2013, почти через 2 года, к РДР2 трейлер тоже за 2
                года выходил.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ======================/ modal /======================= */}
      <div
        id="rlw_overlay"
        onClick={() => {
          rlwToggle(false);
        }}
      ></div>
      <div id="rlw" className="window">
        <div className="block pos-r close_bar">
          <button
            className="btn_close"
            onClick={() => {
              rlwToggle(false);
            }}
          >
            <XLg />
          </button>
        </div>

        <div id="rlw_wrap" className="wrap">
          <div className="b select">
            <p className="block title">Вход в StopGame</p>

            <div className="block btns">
              <button
                className="sign"
                onClick={() => {
                  rlwToOption("sign");
                }}
              >
                Войти
              </button>
              <button
                className="register"
                onClick={() => {
                  rlwToOption("register");
                }}
              >
                Зарегестрироваться
              </button>
            </div>
            <span className="info">
              Авторизуясь, ты соглашаешься с правилами сайта и пользовательским
              соглашением.
            </span>
          </div>
          <div className="b option">
            <button
              className="btn_back"
              onClick={() => {
                rlwToOption("back");
              }}
            >
              <ChevronLeft />
              Назад
            </button>
            <div id="rlwFormS" className="block form">
              <span className="title">Войти</span>
              <div className="_errors">
                <p>{error1V}</p>
                <p>{error2V}</p>
                <p>{error3V}</p>
              </div>
              <input
                type="text"
                placeholder="Логин"
                onChange={(e) => setLogin(e.target.value)}
              />
              <input
                type="password"
                placeholder="Пароль"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="submit_btn"
                onClick={() => handleLogin(login, password)}
              >
                Войти
              </button>
            </div>
            <div id="rlwFormR" className="block form">
              <span className="title">Регестрация</span>
              <div className="_errors">
                <p>{error1V}</p>
                <p>{error2V}</p>
                <p>{error3V}</p>
              </div>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Логин"
                onChange={(e) => setLogin(e.target.value)}
              />
              <input
                type="password"
                placeholder="Пароль"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="submit_btn"
                onClick={() => handleRegister(email, login, password)}
              >
                Войти
              </button>
            </div>
            <span className="info">
              Авторизуясь, ты соглашаешься с правилами сайта и пользовательским
              соглашением.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
