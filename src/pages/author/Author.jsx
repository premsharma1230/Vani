import React from "react";
import { AuthorBanner } from "./AuthorBanner";
import author from "../../assets/niya.png";
import Pagination from "@mui/material/Pagination";
import { Link, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { Footer } from "../Footer/Footer";

export const Author = () => {
  let navigate = useNavigate();
  //   const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  //   const alphabet = alpha.map(x => String.fromCharCode(x));
  //   console.log(alphabet);

  const handleRoute = () => {
    navigate("/AuhorDescription");
  };

  return (
    <section className="Main_HomeWrapper  Author_Wrapper">
      <AuthorBanner />
      <div className="container">
        <div className="Author_content">
          <div className="Author_heading">
            <h2>All Authors</h2>
          </div>
          <div className="Author-Card_Wrap Category_Grid_Wrp">
            <div className="category_Grid_Content">
              {[...Array(4).keys()].map((ele, index) => (
                <div key={index} className="Grid-item">
                  <figure>
                    <img
                      onClick={() => handleRoute(ele)}
                      src={author}
                      alt="book"
                    />
                  </figure>
                  <figcaption>
                    <h3>Title</h3>
                    <h4>Jack Rathi</h4>
                    <span key={index} className="star_wrp">
                      {[...Array(4).keys()].map(index => (
                        <i className="fas fa-star star-item"></i>
                      ))}
                    </span>
                    <strong>Books Written : 15 </strong>
                  </figcaption>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="Pagination_wrp">
          <div className="Alphabetic-pagination">
            {[...Array(26).keys()].map(index => (
              <li>A</li>
            ))}
          </div>
          <div className="Pagination_Content">
            <Stack spacing={2}>
              {/* page={page} */}
              <Pagination count={10} />
            </Stack>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
