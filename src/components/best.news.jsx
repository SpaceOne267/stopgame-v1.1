import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// icons
import { ChevronLeft, ChevronRight, ChatDots } from "react-bootstrap-icons";
import i from "../assets/img/c.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../assets/css/best.e.css";

// import required modules
import { Navigation } from "swiper/modules";

const BestNews = () => {
  const [swiper, setSwiper] = React.useState(null);
  function nextTo() {
    swiper.slideNext();
  }
  function prevTo() {
    swiper.slidePrev();
  }
  return (
    <section className="block _best best_news_section">
      <div className="block">
        <span className="block title">Все обсуждают</span>
        <div className="control_btns">
          <button className="slide-prev" onClick={prevTo}>
            <ChevronLeft />
          </button>
          <button className="slide-next" onClick={nextTo}>
            <ChevronRight />
          </button>
        </div>
      </div>
      <Swiper
        className="cards"
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={"24px"}
        modules={[Navigation]}
        speed={700}
        onSwiper={(s) => {
          setSwiper(s);
        }}
      >
        <SwiperSlide className="card">
          <a href="#card" className="block">
            <div className="img">
              <img src={i} alt="" />
            </div>
            <div className="content">
              <span className="pubdate">5-декабря, 11:23</span>
              <span className="title">
                Всё, что известно о GTA VI из первого трейлера
              </span>
            </div>
            <span className="category">Новость</span>
            <div className="info">
              <span className="author">Author Name</span>
              <div className="options">
                <ChatDots />
                189
              </div>
            </div>
          </a>
        </SwiperSlide>
        {/* ---- */}
        <SwiperSlide className="card">
          <a href="#card" className="block">
            <div className="img">
              <img src={i} alt="" />
            </div>
            <div className="content">
              <span className="pubdate">5-декабря, 11:23</span>
              <span className="title">
                Всё, что известно о GTA VI из первого трейлера
              </span>
            </div>
            <span className="category">Новость</span>
            <div className="info">
              <span className="author">Author Name</span>
              <div className="options">
                <ChatDots />
                189
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="card">
          <a href="#card" className="block">
            <div className="img">
              <img src={i} alt="" />
            </div>
            <div className="content">
              <span className="pubdate">5-декабря, 11:23</span>
              <span className="title">
                Всё, что известно о GTA VI из первого трейлера
              </span>
            </div>
            <span className="category">Новость</span>
            <div className="info">
              <span className="author">Author Name</span>
              <div className="options">
                <ChatDots />
                189
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="card">
          <a href="#card" className="block">
            <div className="img">
              <img src={i} alt="" />
            </div>
            <div className="content">
              <span className="pubdate">5-декабря, 11:23</span>
              <span className="title">
                Всё, что известно о GTA VI из первого трейлера
              </span>
            </div>
            <span className="category">Новость</span>
            <div className="info">
              <span className="author">Author Name</span>
              <div className="options">
                <ChatDots />
                189
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="card">
          <a href="#card" className="block">
            <div className="img">
              <img src={i} alt="" />
            </div>
            <div className="content">
              <span className="pubdate">5-декабря, 11:23</span>
              <span className="title">
                Всё, что известно о GTA VI из первого трейлера
              </span>
            </div>
            <span className="category">Новость</span>
            <div className="info">
              <span className="author">Author Name</span>
              <div className="options">
                <ChatDots />
                189
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="card">
          <a href="#card" className="block">
            <div className="img">
              <img src={i} alt="" />
            </div>
            <div className="content">
              <span className="pubdate">5-декабря, 11:23</span>
              <span className="title">
                Всё, что известно о GTA VI из первого трейлера
              </span>
            </div>
            <span className="category">Новость</span>
            <div className="info">
              <span className="author">Author Name</span>
              <div className="options">
                <ChatDots />
                189
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="card">
          <a href="#card" className="block">
            <div className="img">
              <img src={i} alt="" />
            </div>
            <div className="content">
              <span className="pubdate">5-декабря, 11:23</span>
              <span className="title">
                Всё, что известно о GTA VI из первого трейлера
              </span>
            </div>
            <span className="category">Новость</span>
            <div className="info">
              <span className="author">Author Name</span>
              <div className="options">
                <ChatDots />
                189
              </div>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BestNews;
