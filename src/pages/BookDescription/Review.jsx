import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetBookReview, CreateBookReview } from "../../api/api";
import { useSelector, useDispatch } from "react-redux";
import { Redirection } from "../../actions";

export const Review = getID => {
  let navigate = useNavigate()
  const dispatch = useDispatch();
  const token = JSON.parse(sessionStorage?.getItem("LoginData"))?.token;
  const [review, setReview] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [selectStar, setSelectStar] = useState(0);
  const [getReviewData, setGetReviewData] = useState([]);
  
  useEffect(() => {
    // GetAuthorsReview(getID.getID).then(ele => {
    //   setReview(ele?.results)
    // })
    if (getID.getID) {
      GetBookReview(getID.getID).then(elem => {
        setGetReviewData(elem?.data);
      });
    }
  }, [getID]);

  const handleSelectedStar = i => {
    setSelectStar(i + 1);
  };

  const handleReview = e => {
    setReview(e?.target?.value);
  };
  const handleName = e => {
    setName(e?.target?.value);
  };
  const handleTitle = e => {
    setTitle(e?.target?.value);
  };

  const handleSubmit = elm => {
    const body = {
      username: setName,
      stars: selectStar,
      title: title,
      reviews: review,
    };
    if(token){
    CreateBookReview(getID.getID, body,token).then(elm => {
    });
  }else{
    dispatch(Redirection("/AuhorDescription"));
    navigate("/Login");
  }
  };
  
  return (
    <div className="Review_Wrapper">
      <div className="container">
        <div className="Review_heading">
          <h2>Review</h2>
        </div>
        <div className="Review_Content">
          <div className="Review_client">
            <ul>
              {getReviewData &&
                getReviewData.map((elem, index) => (
                  <li key={index}>
                    <div className="user-Avatar">
                      <span>
                        <i class="fas fa-user-circle user1"></i>
                      </span>
                    </div>
                    <div className="User_content">
                      <h3>{elem?.username}</h3>
                      <span className="Star_wrp">
                        {[...Array(elem?.stars).keys()].map(index => (
                          <i className="fas fa-star star-item"></i>
                        ))}
                      </span>
                      <p>{elem?.reviews}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className="Review_form">
            <div className="Review_Form_heading">
              <h2>Write your Review</h2>
            </div>
            <div className="Review_Form_Wrp">
              <form>
                <div className="Review1">
                  <label>Rating *</label>
                  <span className="Star_wrp">
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
                    {/* {review != 0 ?
                    [...Array(review).keys()].map(index => (
                      <div onClick={() => handleSelectedStar(index)}>
                      <i className="far fa-star star-item"></i>
                      </div>
                    ))
                    :
                    [...Array(5).keys()].map(index => (
                      <div onClick={() => handleSelectedStar(index)}>
                      <i className="far fa-star star-item"></i>
                      </div>
                    ))
                    } */}
                  </span>
                </div>
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
                  <label>title *</label>
                  <span>
                    <input
                      type="text"
                      placeholder=""
                      name="title"
                      onChange={handleTitle}
                    />
                  </span>
                </div>
                <div className="Review1">
                  <label>Review *</label>
                  <span className="TextArea_wrp">
                    <textarea
                      type="text"
                      placeholder=""
                      name="review"
                      onChange={handleReview}
                    />
                  </span>
                </div>
                <div className="Review1">
                  <label> </label>
                  <span>
                    <input
                      onClick={handleSubmit}
                      type="submit"
                      form="form1"
                      value=" Submit Your Review"
                      id="Submit"
                    />
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
