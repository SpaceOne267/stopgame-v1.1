import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Post from "./page/Post";
import UserProfile from "./page/user/user.main";
import UserBlogs from "./page/user/user.blogs";
import UserBlogsAdd from "./page/user/user.blogs.add";
import UserCompilations from "./page/user/user.compilations";
import UserFavorite from "./page/user/user.favorite";
import UserSubcribtions from "./page/user/user.subcribtions";
import Page404 from "./page/404";
function App() {
  const themeData = JSON.parse(localStorage.getItem("theme"));
  const theme = themeData ? themeData : "dark";
  return (
    <main id="app" data-theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/user/compilations" element={<UserCompilations />} />
        <Route path="/user/favorite" element={<UserFavorite />} />
        <Route path="/user/subcribtions" element={<UserSubcribtions />} />
        <Route path="/user/blogs" element={<UserBlogs />} />
        <Route path="/user/blogs/add" element={<UserBlogsAdd />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </main>
  );
}

export default App;
