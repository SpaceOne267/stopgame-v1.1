import React from "react";
import UserLayout from "./user.layout";
import "../../assets/css/user/user.blogs.css";
const UserBlogs = () => {
  return (
    <>
      <UserLayout>
        <div className="_games_header-row">
          <h2>Блоги</h2>
          <ul className="inner_tabs">
            <li>
              <a href="/user/blogs" className="tab-active">
                Опубликованные
              </a>
            </li>
            <li>
              <a href="/user/blogs">Черновики</a>
            </li>
            <li>
              <a href="/user/blogs">Удалённые</a>
            </li>
          </ul>
          <a href="/user/blogs/add" className="_primarry-btn ">
            Написать блог
          </a>
        </div>
      </UserLayout>
    </>
  );
};

export default UserBlogs;
