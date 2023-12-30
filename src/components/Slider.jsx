// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Icons
import { ChatDots, Newspaper } from "react-bootstrap-icons";

// Import styles
import "swiper/css";
import "swiper/css/pagination";
import "../assets/css/slider.css";

import i from "../assets/img/img.webp";

export default function CardSlider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        ' swiper_bullet">' +
        (index + 1) +
        "</span>"
      );
    },
  };
  return (
    <Swiper
      className="main_slider"
      loop={true}
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={pagination}
      speed={1000}
      autoplay={{ delay: 5000 }}
    >
      <SwiperSlide>
        <div className="cards">
          <a href="/article" className="card ct1">
            <img src={i} alt="" />
            <div className="content">
              <span className="block category">
                <Newspaper />
                Категория
              </span>
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
          <a href="/article" className="card ct1">
            <img src={i} alt="" />
            <div className="content">
              <span className="block category">
                <Newspaper />
                Категория
              </span>
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
          {/*  */}

          <a href="/article" className="card ct2">
            <img src={i} alt="" />
            <div className="content">
              <span className="block category">
                <Newspaper />
                Категория
              </span>
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
          <a href="/article" className="card ct2">
            <img src={i} alt="" />
            <div className="content">
              <span className="block category">
                <Newspaper />
                Категория
              </span>
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
          <a href="/article" className="card ct2">
            <img src={i} alt="" />
            <div className="content">
              <span className="block category">
                <Newspaper />
                Категория
              </span>
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
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="cards">
          <a href="/article" className="card ct1">
            <img src={i} alt="" />
            <div className="content">
              <span className="block category">
                <Newspaper />
                Категория
              </span>
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
          <a href="/article" className="card ct1">
            <img src={i} alt="" />
            <div className="content">
              <span className="block category">
                <Newspaper />
                Категория
              </span>
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
          {/*  */}

          <a href="/article" className="card ct2">
            <img src={i} alt="" />
            <div className="content">
              <span className="block category">
                <Newspaper />
                Категория
              </span>
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
          <a href="/article" className="card ct2">
            <img src={i} alt="" />
            <div className="content">
              <span className="block category">
                <Newspaper />
                Категория
              </span>
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
          <a href="/article" className="card ct2">
            <img src={i} alt="" />
            <div className="content">
              <span className="block category">
                <Newspaper />
                Категория
              </span>
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
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="cards">
          <a href="/article" className="card ct1">
            <img src={i} alt="" />
            <div className="content">
              <span className="block category">
                <Newspaper />
                Категория
              </span>
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
          <a href="/article" className="card ct1">
            <img src={i} alt="" />
            <div className="content">
              <span className="block category">
                <Newspaper />
                Категория
              </span>
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
          {/*  */}

          <a href="/article" className="card ct2">
            <img src={i} alt="" />
            <div className="content">
              <span className="block category">
                <Newspaper />
                Категория
              </span>
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
          <a href="/article" className="card ct2">
            <img src={i} alt="" />
            <div className="content">
              <span className="block category">
                <Newspaper />
                Категория
              </span>
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
          <a href="/article" className="card ct2">
            <img src={i} alt="" />
            <div className="content">
              <span className="block category">
                <Newspaper />
                Категория
              </span>
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
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
