import React, { useEffect, useState } from "react";
import book from "../../../assets/niya.png";
import { useLocation, Link, useNavigate, NavLink } from "react-router-dom";
import { Footer } from "../../Footer/Footer";
import { AuthorInfo } from "../authorDescription/AuthorInfo";
import {
  GetAuthorsDetails,
  GetAuthorsDetailsReleted,
  AuthorReviewApi,
} from "../../../api/api";
import { useSelector, useDispatch } from "react-redux";
import { Redirection } from "../../../actions";

export const AuhorDescription = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const auth_slug = location.pathname.split("/");
  const token = JSON.parse(sessionStorage?.getItem("LoginData"))?.token;
  const [bookDetails, setBookDetails] = useState([]);
  const [bookDetailsReleted, setBookDetailsReleted] = useState([]);
  const [rating, setRating] = useState("");
  const [selectStar, setSelectStar] = useState(0);

  useEffect(() => {
    GetAuthorsDetails(auth_slug[2]).then(ele => {
      setBookDetails(ele?.data);
    });
    GetAuthorsDetailsReleted(auth_slug[2]).then(ele => {
      setBookDetailsReleted(ele?.results);
    });
  }, []);

  const handleName = e => {
    setRating(e?.target?.value);
  };
  const handleSelectedStar = i => {
    setSelectStar(i + 1);
  };

  const handleSubmitAuthorReview = () => {
    const body = {
      title: "setName",
      review: rating,
      rating: selectStar,
    };
    if (token) {
      AuthorReviewApi(body, bookDetails?.id, token).then(elm => {});
    } else {
      dispatch(Redirection("/AuhorDescription"));
      navigate("/Login");
    }
  };
  return (
    <>
      <section className="Main_HomeWrapper Description_wrapper BookDesciption_Wrapper AuthorDescription_Wrapper">
        <div className="BookDescription_head">
          <div className="container">
            <div className="booklist_navigation">
              <ul className="BreadCumb ">
                <li>
                  <Link to="/">Home</Link> /
                </li>
                <li>
                  <Link to="/Author">Authors</Link>/
                </li>
                <li>
                  <Link to="#">{bookDetails?.slug}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="Description_Content">
            <div className="Description_Left">
              <figure>
                <div className="img_Wrp">
                  {" "}
                  <img src={bookDetails?.image} alt="book" />
                </div>
                <ul className="Social_Content">
                  <li>
                    <a href={bookDetails?.fb_link}>
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={bookDetails?.insta_link}>
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={bookDetails?.twitter_link}>
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={bookDetails?.youtube_link}>
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </figure>
            </div>
            <div className="Description_Right">
              <div className="About_Book">
                <div className="About-book-title">
                  <h2>{bookDetails?.author_full_name}</h2>
                </div>
                <figcaption>
                  <div className="rating_Wrap">
                    <ul className="Star_Wrp">
                      {[
                        ...Array(
                          bookDetails?.reviews != 0 ? bookDetails?.reviews : 1
                        ).keys(),
                      ].map(index => (
                        <li key={index}>
                          <i className="fas fa-star star"></i>
                        </li>
                      ))}
                    </ul>
                    <div>
                      <p>1,002 reader’s ratings</p>
                    </div>
                  </div>
                  <div className="About-book-detail">
                    <ul className="book-list-left">
                      <li>
                        <span>Total Books Written :</span>
                        <strong>{bookDetails?.book_counts}</strong>
                      </li>
                      <li>
                        <span>First Publication : </span>
                        <strong>{bookDetails?.first_publication_date}</strong>
                      </li>
                      <li>
                        <span>Language :</span>
                        <strong>{bookDetails?.book_counts}</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="Author_Detail">
                    <p>{bookDetails?.description}</p>
                  </div>
                </figcaption>
              </div>
              <div className="Review_Form_Wrp">
                <form>
                  <div className="Review1">
                    <label>name *</label>
                    <span>
                      <input
                        type="text"
                        placeholder=""
                        name="name"
                        onChange={handleName}
                      />
                    </span>
                  </div>
                  <div className="Review1">
                    <label>Rating *</label>
                    <span className="Star_wrp">
                      {/* {[
                        ...Array(
                          bookDetails?.reviews != 0 ? bookDetails?.reviews : 1
                        ).keys(),
                      ].map(index => (
                        <i key={index} className="fas fa-star star-item"></i>
                      ))} */}
                      {selectStar != 0 ? (
                        <>
                          {[...Array(selectStar).keys()].map(index => (
                            <div onClick={() => handleSelectedStar(index)}>
                              <i className="fas fa-star star-item"></i>
                            </div>
                          ))}
                          {[...Array(5 - Number(selectStar)).keys()].map(
                            index => (
                              <div
                                onClick={() =>
                                  handleSelectedStar(index + selectStar)
                                }
                              >
                                <i className="far fa-star star star-item"></i>
                              </div>
                            )
                          )}
                        </>
                      ) : (
                        [...Array(5).keys()].map(index => (
                          <div onClick={() => handleSelectedStar(index)}>
                            <i className="far fa-star star-item"></i>
                          </div>
                        ))
                      )}
                    </span>
                  </div>
                  <div className="Review1">
                    <label> </label>
                    <span>
                      <button
                        type="submit"
                        form="form1"
                        value="Submit"
                        id="Submit"
                        onClick={handleSubmitAuthorReview}
                      >
                        Submit Your Review
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="bookDes_Wrp">
            <div className="container">
              <div className="bookDes_Wrp_Content">
                <h2>More information About Author</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer etiam purus eget ullamcorper viverra nunc, morbi. Eget
                  ipsum elit laoreet elit facilisis neque pellentesque. Faucibus
                  quis eu, egestas velit. Bibendum quis condimentum integer
                  vitae fermentum. Tempor adipiscing felis nisi faucibus
                  placerat rhoncus malesuada facilisis arcu. Facilisi vel arcu
                  morbi non netus est ipsum malesuada maecenas. Eget fermentum,
                  habitasse faucibus lorem tortor, lorem sapien vitae faucibus.
                  Vitae, mi nunc, vitae leo nunc interdum fringilla urna. Semper
                  lacus, in elit amet, feugiat sem quam. Ut nisl duis sed enim
                  enim aliquam turpis elit. Dis fringilla adipiscing orci odio
                  turpis mattis at est.
                </p>
              </div>
            </div>
          </div>

          {/* Related-Books */}
          <div className="AuthInfo">
            <AuthorInfo bookInfoReleted={bookDetailsReleted} />
          </div>

          <div className="Otherbook_Wrapper Author_desc_Wrp">
            <div className="Otherbook-Heading">
              <h2>More books by this Author</h2>
            </div>
            <div className="Grid_Carousel_wrp">
              {/* {booklist.length > 0 &&
              booklist?.map(ele => ( */}
              {bookDetailsReleted?.map((ele, index) => (
                <div key={index} className="Grid-item">
                  <Link to="#">
                    <figure>
                      <img src={book} alt="book" />
                    </figure>
                    <figcaption>
                      <h3>{ele?.title}</h3>
                      <strong>Mahesh max</strong>
                      <span key={index} className="star_wrp">
                        {[...Array(4).keys()].map(index => (
                          <i className="fas fa-star star-item"></i>
                        ))}
                      </span>
                      <strong>
                        {"₹"} {ele?.ebook_details?.epub?.original_price}
                      </strong>
                    </figcaption>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* end-here--Other-Books */}
        </div>
        <Footer />
      </section>
    </>
  );
};
