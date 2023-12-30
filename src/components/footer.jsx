import React from "react";
import {
  Discord,
  Steam,
  Telegram,
  Twitch,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
import HeaderLogo from "./svg/headerLogo";

// css
import "../assets/css/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <section className="container wrapper">
        <div className="row row-1">
          <div className="logo">
            <HeaderLogo />
            <span className="subtitle">Рассказываем вам о видеоиграх</span>
          </div>
          <div className="social">
            <a href="#youtube">
              <Youtube />
            </a>
            <a href="#twitter">
              <Twitter />
            </a>
            <a href="#telegram">
              <Telegram />
            </a>
            <a href="#steam">
              <Steam />
            </a>
            <a href="#twitch">
              <Twitch />
            </a>
            <a href="#discord">
              <Discord />
            </a>
          </div>
          {/* b-1.5 */}
          {/* Menu Left */}
          <div className="menu_lr menu_left">
            {/* News */}
            <div className="site_menu">
              <a className="block title" href="#news">
                Новости
              </a>
              <div className="submenu">
                <a href="#a">Все</a>
                <a href="#a">PC</a>
                <a href="#a">Xbox One</a>
                <a href="#a">XboxSeries X|S</a>
                <a href="#a">Playstation 4</a>
                <a href="#a">PlayStation 5</a>
                <a href="#a">Stadia</a>
                <a href="#a">VR</a>
                <a href="#a">Nintendo Switch</a>
                <a href="#a">MMO</a>
                <a href="#a">Мобильные</a>
                <a href="#a">Социальные</a>
                <a href="#a">Фановые</a>
                <a href="#a">Железо</a>
                <a href="#a">Фановые</a>
                <a href="#a">Индустрия</a>
                <a href="#a">Киберспорт</a>
                <a href="#a">Кино</a>
              </div>
            </div>
            {/* Read */}
            <div className="site_menu">
              <a className="block title" href="#read">
                Читать
              </a>
              <div className="submenu">
                <a href="#a">Главная</a>
                <a href="#a">Статьи</a>
                <a href="#a">Обзоры</a>
                <a href="#a">Превью</a>
                <a href="#a">Первая полоса</a>
                <a href="#a">Интервью</a>
                <a href="#a">Подборки</a>
              </div>
            </div>
            {/* Watch */}
            <div className="site_menu">
              <a className="block title" href="#watch">
                Смотреть
              </a>
              <div className="submenu">
                <a href="#a">Главная</a>
                <a href="#a">Видеообзоры</a>
                <a href="#a">История серии</a>
                <a href="#a">Рубрикатор</a>
                <a href="#a">Авторские видео</a>
                <a href="#a">Инфакт</a>
                <a href="#a">Трейлеры</a>
                <a href="#a">Все видео</a>
              </div>
            </div>
          </div>
          {/* Menu Right */}
          <div className="menu_lr menu_right">
            {/* Games */}
            <div className="site_menu">
              <a className="block title" href="#news">
                Игры
              </a>
              <div className="submenu">
                <a href="#a">Лучшие игры</a>
                <a href="#a">Календарь</a>
                <a href="#a">Каталог</a>
                <a href="#a">Отзывы</a>
                <a href="#a">Подборки игр</a>
                <a href="#a">Факты</a>
              </div>
            </div>

            {/* Blogs */}
            <div className="site_menu">
              <a className="block title" href="#blogs">
                Блоги
              </a>
              <div className="submenu">
                <a href="#a">Все</a>
                <a href="#a">Лучшее за неделю</a>
                <a href="#a">Победители косарей</a>
                <a href="#a">+5</a>
                <a href="#a">+100</a>
                <a href="#a">StopGame</a>
              </div>
            </div>

            {/* Streams */}
            <div className="site_menu">
              <a className="block title" href="#streams">
                Стримы
              </a>
              <div className="submenu">
                <a href="#a">Расписание</a>
                <a href="#a">Записи</a>
                <a href="#a">Кек</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-2">
          <div className="help_menu">
            <a href="#help">Помощь</a>
            <a href="#about">О проекте</a>
            <a href="#advertising">Реклама на сайте</a>
            <a href="#site-help">Помощь по сайту</a>
            <a href="#feedback">Обратная связь</a>
            <a href="#terms">Соглашение о пользовании</a>
          </div>
          <div className="credits">
            <div className="agelimit">18+</div>
            <span className="main">© 1999–2023 StopGame.ru</span>
            <span className="sub">
              Использование любых материалов сайта без согласования с
              администрацией запрещено
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
