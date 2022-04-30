import React, { useEffect, useState } from "react";
import { AuthorBanner } from "./AuthorBanner";
import author from "../../assets/niya.png";
import Pagination from "@mui/material/Pagination";
import { Link, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { Footer } from "../Footer/Footer";
import { GetAuthorsList } from "../../api/api";

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map(x => String.fromCharCode(x));
export const Author = () => {
  let navigate = useNavigate();
  const [count, setCount] = React.useState(1);
  const [page, setPage] = React.useState(1);
  const [startSize, setStartSize] = React.useState(0);
  const handleRoute = e => {
    sessionStorage.setItem("AuhorDetail", JSON.stringify(e));
    navigate("/AuhorDescription");
  };
  const [authorList, setAuthorList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    GetAuthorsList("NA").then(res => {
      setAuthorList(res?.results);
      setCount(Math.ceil(res?.results?.length / 2));
    });
  }, []);

  const getAllAuthor = (item, index) => {
    setActiveIndex(index);
    GetAuthorsList(item).then(res => {
      setCount(Math.ceil(res?.results?.length / 2));
      setAuthorList(res?.results);
    });
  };
  const handleChange = (event, value) => {
    setPage(value);
    setStartSize(value * 2 - 2);
  };
  console.log(authorList, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
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
              {authorList &&
                authorList
                  .slice(startSize, startSize + 2)
                  ?.map((ele, index) => (
                    <div key={index} className="Grid-item">
                      <figure>
                        <Link
                          to={`/AuhorDescription/${ele?.slug}`}
                          key={ele?.slug}
                        >
                          <img
                            onClick={() => handleRoute(ele)}
                            src={ele?.images}
                            alt="book"
                          />
                        </Link>
                      </figure>
                      <figcaption>
                        <h3>{ele?.author_full_name}</h3>
                        <span key={index} className="star_wrp">
                          {[
                            ...Array(
                              ele?.reviews != 0 ? ele?.reviews : 1
                            ).keys(),
                          ].map(index => (
                            <i
                              key={index}
                              className="fas fa-star star-item"
                            ></i>
                          ))}
                        </span>
                        <strong>
                          {"Books Written : "} {ele?.book_counts}{" "}
                        </strong>
                      </figcaption>
                    </div>
                  ))}
            </div>
          </div>
        </div>
        <div className="Pagination_wrp">
          <div className="Alphabetic-pagination">
            {alphabet.map((elem, index) => (
              <li
                onClick={() => getAllAuthor(elem, index)}
                key={index}
                className={activeIndex === index ? "activeBtn" : null}
              >
                {elem}
              </li>
            ))}
          </div>
          <div className="Pagination_Content">
            <Stack spacing={2}>
              <Pagination count={count} page={page} onChange={handleChange} />
            </Stack>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
