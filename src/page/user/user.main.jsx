import React from "react";
import UserLayout from "./user.layout";
// img
// css
import "../../assets/css/user/user.main.css";

import {
  ClockFill,
  Controller,
  Diagram3Fill,
  FlagFill,
  PauseFill,
  StarFill,
} from "react-bootstrap-icons";

const UserProfile = () => {
  return (
    <>
      <UserLayout>
        <div className="_index_container">
          <div className="block">
            <div className="_index_section">
              <div className="_my-top_header">
                <h2>Мой топ</h2>
                <button className="edit">Редактировать</button>
              </div>
              <div className="_my-top_grid">
                {/* cards */}
                <div className="_my-top_empty_card">
                  <div className="inner"></div>
                </div>
                <div className="_my-top_empty_card">
                  <div className="inner"></div>
                </div>
                <div className="_my-top_empty_card">
                  <div className="inner"></div>
                </div>
                <div className="_my-top_empty_card">
                  <div className="inner"></div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="_index_section_small_header">
            <div className="_header">
              <h2>Последние добавленные игры</h2>
              <button className="_primarry-btn">Добавить Игру</button>
            </div>
            <p>Добавь игры в свою библиотеку</p>
          </div>
          {/* _stats */}
          <div className="_index_section_stats">
            <div className="stats_grid">
              {/* stats_container */}
              <div className="stats_container">
                <div className="header">
                  <span className="number">0</span>
                  <span className="description">Игр в коллекции</span>
                </div>
                {/* body */}
                <div className="body">
                  <div className="grid">
                    <span className="number">0</span>
                    <a href="#a" className="_title willplay">
                      <ClockFill />
                      Буду играть
                    </a>
                    <span className="number">0</span>
                    <a href="#a" className="_title playing">
                      <Controller />
                      Играю
                    </a>
                    <span className="number">0</span>
                    <a href="#a" className="_title completed">
                      <FlagFill />
                      Пройдено
                    </a>
                    <span className="number">0</span>
                    <a href="#a" className="_title throwed">
                      <PauseFill />
                      Заброшено
                    </a>
                  </div>
                </div>
              </div>
              {/* / */}
              <div className="stats_container stats">
                <div className="header">
                  <Diagram3Fill />
                  <span className="description">Статистика</span>
                </div>
                {/* body */}
                <div className="body">
                  <div className="grid">
                    <span className="number">0</span>
                    <a href="#a" className="_title">
                      комментариев
                    </a>
                    <span className="number">0</span>
                    <span className="_title">плюсов</span>
                    <span className="number">0</span>
                    <span className="_title">минусов</span>
                  </div>
                </div>
              </div>
              {/* / */}
              <div className="stats_container comunity">
                <div className="header">
                  <StarFill />
                  <span className="description">Статистика</span>
                </div>
                {/* body */}
                <div className="body">
                  <div className="grid">
                    <span className="number">0</span>
                    <a href="#a" className="_title">
                      блогов
                    </a>
                    <span className="number">0</span>
                    <a href="#a" className="_title">
                      отзывов
                    </a>
                    <span className="number">0</span>
                    <a href="#a" className="_title">
                      подписчиков
                    </a>
                    <span className="number">0</span>
                    <span className="_title">вопросов</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UserLayout>
    </>
  );
};

export default UserProfile;
