import React from "react";
import Layout from "./layout";
import HeaderLogo from "../components/svg/headerLogo";
import { useNavigate } from "react-router-dom";
import "../assets/css/404.css";
const Page404 = () => {
  let navigate = useNavigate();
  return (
    <Layout>
      <div className="backdrop_bg"></div>
      <main className="container main_section_nf">
        <div className="not">
          <HeaderLogo />
          <h1 className="_text">404</h1>
          <span>Страница не найдена.</span>
          <button className="btn _red-btn" onClick={() => navigate(-1)}>
            Вернуться назад
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default Page404;
