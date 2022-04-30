import React, { useState, useEffect } from "react";
import About from "../../assets/authBanner.png";
import { AuthorBannerApi } from "../../api/api";

export const AuthorBanner = () => {
  const [author, setAuthor] = useState();

  useEffect(() => {
    AuthorBannerApi().then(elem => {
      setAuthor(elem?.data);
    });
  }, []);

  return (
    <div className="AuthorBanner_Wrapper">
      <div className="Banner_img">
        <img src={author && author?.img ? author?.img : About} alt="banner" />
      </div>
      <div className="container">
        <div className="AuthBanner-Content">
          <h2>{author && author?.title}</h2>
          <p>{author && author?.description}</p>
        </div>
      </div>
    </div>
  );
};
