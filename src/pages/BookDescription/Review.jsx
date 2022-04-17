import React, { useEffect, useState } from "react";
import { GetAuthorsReview } from "../../api/api";

export const Review = (getID) => {
  const [review,setReview] = useState(0)
  useEffect(() => {
    // GetAuthorsReview(getID.getID).then(ele => {
    //   setReview(ele?.results)
    // })
  },[])
  const handleSelectedStar = (i) => {
   console.log(i+1,"QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ")
   setReview(i+1)
  }
  return (
    <div className="Review_Wrapper">
      <div className="container">
        <div className="Review_heading">
          <h2>Review</h2>
        </div>
        <div className="Review_Content">
          <div className="Review_client">
            <ul>
              {[...Array(4).keys()].map(index => (
                <li key={index}>
                  <div className="user-Avatar">
                    <span>
                      <i class="fas fa-user-circle user1"></i>
                    </span>
                  </div>
                  <div className="User_content">
                    <h3>Mishra ji</h3>
                    <span key={index} className="Star_wrp">
                      {[...Array(3).keys()].map(index => (
                        <i className="fas fa-star star-item"></i>
                      ))}
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer etiam purus eget ullamcorper viverra nunc, morbi.
                      Eget ipsum elit laoreet elit facilisis neque pellentesque.
                      Faucibus quis eu, egestas velit. Bibendum quis condimentum
                      integer vitae fermentum. Tempor adipiscing felis nisi
                      faucibus placerat rhoncus malesuada facilisis arcu.
                    </p>
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
                  {review != 0 ?
                      <>
                      {[...Array(review).keys()].map(index => (
                          <div onClick={() => handleSelectedStar(index)}>
                          <i className="far fa-star star-item"></i>
                          </div>
                      ))}
                       {[...Array(5 - Number(review)).keys()].map(index => (
                         <div onClick={() => handleSelectedStar(index+review)}>
                        <i className="far fa-star star"></i>
                         </div>
                      ))}
                      </>
                      :
                      [...Array(5).keys()].map(index => (
                        <div onClick={() => handleSelectedStar(index)}>
                        <i className="far fa-star star-item"></i>
                        </div>
                      ))}
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
                    <input type="text" placeholder="" name="name" />
                  </span>
                </div>
                <div className="Review1">
                  <label>title *</label>
                  <span>
                    <input type="text" placeholder="" name="title" />
                  </span>
                </div>
                <div className="Review1">
                  <label>Review *</label>
                  <span className="TextArea_wrp">
                    <textarea type="text" placeholder="" name="review" />
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
                    >
                      Submit Your Review
                    </button>
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
