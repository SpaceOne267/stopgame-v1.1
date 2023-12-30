import React from "react";
import Layout from "./layout";
import {
  // Newspaper,
  Eye,
  ChatDots,
  Bookmark,
  Share,
  ExclamationCircle,
} from "react-bootstrap-icons";
import ava from "../assets/img/avatar.jpeg";
import i from "../assets/img/ii.webp";
import i2 from "../assets/img/iii.webp";
// css
import "../assets/css/post.main.css";
const Post = () => {
  return (
    <>
      <Layout>
        <main className="container post_main">
          <section className="wrap">
            <div className="post_info sub_container">
              <nav className="nav">
                <a href="/">Главная</a>
                <a href="/post">[PageName]</a>
              </nav>
              <div className="info">
                <span className="pubdate">16 Декабря</span>
                <span className="comments">
                  <ChatDots />
                  18
                </span>
                <span className="views">
                  <Eye />
                  2080
                </span>
                <span className="bookmarks">
                  <Bookmark />
                  14
                </span>
                <span className="complain">
                  <ExclamationCircle />
                </span>
                <span className="complain">
                  <Share />
                  Поделиться
                </span>
              </div>
              <h1 className="block title">
                Наши личные игры года, вышедшие не в 2023-м
              </h1>
              <h2 className="sub_title">Городу нерях нужен новый герой</h2>
              <div className="block author">
                <div className="profile">
                  <div className="img">
                    <img src={ava} alt="user_avatar" />
                  </div>
                  <span className="nick_name">Степан Песков</span>
                </div>
                <button className="subcribe_btn">Подписаться</button>
              </div>
            </div>
            {/* main_content */}
            <div className="post_content">
              <p>
                Эти ваши Baldur’s Gate III и Alan Wake II — это, конечно,
                хорошо, но в уходящем году мы не только изучали новинки, но и по
                мере сил расчищали завалы в бэк-каталоге. Или просто
                возвращались к проверенным любимицам. О том, какие игры мы
                впервые или заново открыли для себя за последние 12 месяцев,
                читайте в нашей подборке.
              </p>
              <p className="title">
                Александр Бурсов. Assassin’s Creed Origins
              </p>
              <p>
                Кажется, серия House Flipper — как раз для таких маньяков, кому
                не хватает порядка в реальной жизни. Но на самом деле одной лишь
                уборкой дело не ограничивается: тут можно и настоящим дизайнером
                интерьеров стать, вроде тех профессионалов, которые для
                визуализации своей работы используют всякие навороченные
                программы типа Archicad и SketchUp. Звучит уже интереснее, чем
                «симулятор уборщика»? Сейчас расскажу подробнее.
              </p>
              <div className="img_wrap">
                <img src={i} alt="i1" />
              </div>
              <p>
                Во-первых, это смело. Обратите внимание, до Origins развитие
                серии строилось по принципу «Из прошлого в будущее» и касалось
                популярных тем. То в эпоху крестовых походов нас отправят, то
                Флоренцию XV века покажут, то Константинополь времён Сулеймана
                Великолепного. Дальше — война за независимость США, пираты
                Карибского моря, Французская революция, Англия времён Дарвина и
                Диккенса. О каждом из этих периодов может высказаться даже
                человек со средним во всех смыслах образованием. Но с «Истоками»
                произошло нечто неожиданное, а именно — скачок в настолько
                глубокое прошлое, что ассасинов пришлось заменить экзотическими
                меджаями.
              </p>
              <p>
                Египет первого века до нашей эры — действительно редкий и не
                совсем понятный обывателю антураж. Разобраться с ним в первом
                приближении помогли бы «Записки об Александрийской войне» Гая
                Оппия, но это, честно говоря, не самое занятное чтиво, да и
                создано оно две тысячи лет назад. Примерно тогда же вышел фильм
                «Клеопатра» с Элизабет Тейлор (Elizabeth Taylor) — давно
                пересматривали? Обычно компании калибра Ubisoft прибегают к
                испытанным приёмам, коммерческая надёжность которых была не раз
                подтверждена. Но здесь разработчики пошли на эксперимент и,
                самое главное, не сели в лужу. Такая дерзость вдохновляет и
                заодно напоминает, что даже команды вроде Ubisoft Montreal
                иногда делают что-то для души, а не Far Cry 6.
              </p>
              <div className="img_wrap">
                <img src={i2} alt="i2" />
              </div>
              <p>
                Во-вторых, это интересно. Сеттинг в игре — просто отпад. Здесь
                вам и египетские древности, и величественные греческие
                постройки, и тень Рима, нависшая над этим симбиозом цивилизаций.
                Чудеса соседствуют с достижениями античной мысли, а религии
                возрастом в тысячи лет — с модным культом Сераписа. То герой
                изучает нутро пирамид, то крадётся по крыше Александрийской
                библиотеки, то сражается с бегемотами в заводях Нила. Добавьте
                эпизоды в современности с Лейлой Хассан — и поймёте, что
                подобного калейдоскопа эпох и культур нет ни в одном другом
                выпуске серии. О сеттинге Assassin’s Creed Origins я уже
                рассказывал — нелишне вспомнить, чем он примечателен.
              </p>
              <p>
                В-третьих, это умеренно. Древняя мудрость гласит: всё познаётся
                в сравнении. Если сравнивать «Истоки» со следующей игрой серии,
                Odyssey, мы увидим безудержный рост всего и вся. В игре про
                греков больше территорий, врагов, друзей, заданий (именно
                заданий, а не приключений), механик, драк, предметов экипировки,
                реюза ассетов и копипейста (простите), гринда и фарма (простите
                ещё раз), ни к чему не ведущей болтовни и, конечно, фантазий на
                тему истории. Я задолбался разыскивать куски орихалка по всей
                Элладе, строить корабль мечты и топить в битвах за Афины —
                скрипты неизменно охлаждали моё трахание и не давали закрасить
                карту синим.
              </p>
              <p>
                Теперь посмотрите, как на этом фоне выглядит Origins.
                Присутствуют морские сражения, но ровно в таком количестве,
                чтобы я вспомнил, за что не люблю морские сражения от Ubisoft.
                Есть пресловутые вышки и аванпосты, но без перебора. Разговоров
                ровно столько, чтобы не надоели. Задачки на сообразительность?
                Раз, два и обчёлся. Вещизм? Без фанатизма. Охота? Не превращать
                же её в целую цепочку однотипных миссий! Даже заимствования из
                третьего «Ведьмака» скромные: подсмотрели что-то в геймплее,
                чуть-чуть вдохновились дизайном, взяли на карандаш несколько
                квестов (те же прятки с детьми да голос божества из-за статуи) —
                и хватит. Сегодня подобная умеренность в играх — большая
                редкость. Если разработчики могут раздуть что-то вширь и вглубь,
                они примутся раздувать, пока не лопнет.
              </p>
            </div>
          </section>
        </main>
        {/* =========== Footer =============*/}
      </Layout>
    </>
  );
};

export default Post;
