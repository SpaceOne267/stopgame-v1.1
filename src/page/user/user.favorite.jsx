import React from "react";
import UserLayout from "./user.layout";
// css
import "../../assets/css/user/user.main.css";

const UserFavorite = () => {
  return (
    <>
      <UserLayout>
        <div className="_index_container">
          <div className="block">
            <div className="_index_section">
              <div className="_my-top_header">
                <h2>Закладки</h2>
              </div>
              <p>Нет закладок</p>
            </div>
          </div>
        </div>
      </UserLayout>
    </>
  );
};

export default UserFavorite;
