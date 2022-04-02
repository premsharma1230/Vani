import { React, useEffect, useState } from "react";
import Classes from "./_trendingAuthor.module.scss";
import CustomeButton from "../customeButton/customeButton.component";
import { TrendingAuthorAndBook } from "../../api/api";
export default function TrendingAuthor() {
  const [otherData, setOtherData] = useState({});
  const [listData, setData] = useState({});
  useEffect(() => {
    const loadData = () => {
      TrendingAuthorAndBook().then(res => {
        const response = res;
        setData(response.data);
        setOtherData({
          author: response.data.author_image,
          bookImage: response.data.book_image,
          bookTitle: response.data.book_details.title,
          bookDetails: response.data.book_details.description,
          author_name: response.data.author_details.name,
          // stars:response.data.
        });
      });
    };
    loadData();
  }, []);
  return (
    <div className={Classes.sectionMain}>
      <div className={Classes.contentArea}>
        <div className={Classes.bookImage}>
          <img src={otherData.bookImage} alt="book name" />
        </div>
        <div className={Classes.bookDescription}>
          <h1>{otherData.bookTitle}</h1>
          <h2>by - {otherData.author_name}</h2>
          {/* <h6>Stars</h6> */}
          <p>{otherData.bookDetails}</p>
        </div>
        <div className={Classes.authorDescription}>
          <img src={otherData.author} alt="author picture" />
          <CustomeButton name={"LEARN ABOUT AUTHOR"} accent={true} />
        </div>
      </div>
    </div>
  );
}
