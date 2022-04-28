import React from "react";

import CustomeButton from "../customeButton/customeButton.component";

import "../bookDetail/_Bookdetail.styles.scss";

export default function BookDetail({
  isReverse,
  bookTitle,
  authorName,
  rating,
  imageUrl,
}) {
  return (
    <div className={isReverse ? "bookWrapperReverse" : "bookWrapper"}>
      <div className="contentWrapper">
        <h1>{bookTitle}</h1>
        <h2>
          by morgan house
          {/* {authorName} */}
        </h2>
        <ul className="Star_wrp">
          {[...Array(3).keys()].map(index => (
            <li key={index}>
              <i className="fas fa-star star"></i>
            </li>
          ))}
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
          pellentesque eu sit nisi, potenti ante purus vestibulum nibh. Tellus
          consequat, cum nam
        </p>
        <div className="Book_btn">
          <CustomeButton name="SEE THIS BOOK" />
        </div>
      </div>
      <div className="book-image-conatiner">
        <img src={imageUrl} alt="book Name" />
      </div>
    </div>
  );
}
