import React from "react";
import Layout from "../layout";
import "../../assets/css/user/user.blogs.add.css";
import "../../index.css";
// iicons
import {
  Type,
  TypeH1,
  ImageFill,
  PlayBtnFill,
  Link45deg,
  Upload,
  Newspaper,
  ChatDots,
} from "react-bootstrap-icons";
import ep from "../../assets/img/empty_poster.webp";
const UserBlogsAdd = () => {
  return (
    <Layout>
      <div className="_bg"></div>
      <main role="main" className="container main_content">
        <section className="page_section">
          <form
            action="/blogs/add"
            method="get"
            encType="multipart/form-data"
            className="form"
          >
            <div className="_content_wrapper">
              <div className="_header">
                <div className="blog-selector">
                  <select name="selectedTopic" id="topic">
                    <option value="blog">Блог</option>
                    <option value="video">Видео</option>
                    <option value="offtop">Оффтоп</option>
                    <option value="tech">Железо</option>
                    <option value="reviews">Обзоры и расуждения</option>
                    <option value="gamedev">Gamedev</option>
                    <option value="movies">Кино и сериалы</option>
                  </select>
                </div>
                <a target="_blank" href="/site_help" className="rules">
                  Правила публикации блогов
                </a>
              </div>
              {/* form_groups */}
              <div className="form_group field-title">
                <textarea
                  id="topic_title"
                  className="_title_input"
                  name="topic_title"
                  rows="1"
                  placeholder="Заголовок блога"
                  required
                  minLength="3"
                  autoFocus
                ></textarea>
              </div>
              {/* post-content-typing */}
              <div className="form_group">
                <div className="typing_btns">
                  <div className="btn">
                    <Type /> Текст
                  </div>
                  <div className="btn">
                    <TypeH1 /> Заголовок
                  </div>
                  <div className="btn">
                    <ImageFill /> Галерея/Фото
                  </div>
                  <div className="btn">
                    <PlayBtnFill /> GIF/Видео
                  </div>
                  <div className="btn">
                    <Link45deg /> Сторонние Сервисы
                  </div>
                </div>
              </div>
              {/* poster */}
              <div className="form_group">
                <input type="file" accept="image/*" id="uploadPoster" />
                <label className="upload_btn" htmlFor="uploadPoster">
                  <Upload />
                  Загрузить обложку
                </label>
                <div className="form_note">
                  Рекомендуемый минимальный размер 1280×720 пикселей
                </div>
              </div>
              {/* ========== / cover preview / ============ */}
              <div className="blog-cover_preview">
                <div className="card">
                  <img src={ep} alt="" />
                  <section className="top">
                    <div className="cat">
                      <Newspaper />
                      <span>Блог</span>
                    </div>
                  </section>
                  <section className="bottom">
                    <div>
                      <span className="title">Blog title</span>
                    </div>
                    <div className="info">
                      <span className="author">SpaceOne</span>
                      <div>
                        <span className="comments_count">
                          <ChatDots />0
                        </span>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              {/* ========= */}
              <p className="form_note">
                Публикуя информацию на нашем сайте, ты соглашаешься с
                пользовательским соглашением
              </p>
              <div className="_horizontal_layout">
                <button className="_primarry-btn">Опубликовать</button>
                <button className="_default-btn">В черновик</button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </Layout>
  );
};

export default UserBlogsAdd;
