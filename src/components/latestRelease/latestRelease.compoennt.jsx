import { React, useState, useEffect } from "react";
import Classes from "./_latestRelease.module.scss";
import BookDetail from "../bookDetail/bookdetail.component";
import BookOne from "../../assets/book.png";
import BookTwo from "../../assets/booktwo.png";
import { LatestestBookList } from "../../api/api";

export default function LatestRelease() {
  const [flag, setFlag] = useState(false);
  const [dataValues, setDataValues] = useState([]);
  useEffect(() => {
    const loadData = () => {
      LatestestBookList().then(res => {
        const response = res;
        setDataValues(response.results);
        try {
          setDataValues({
            firstElement: response.results[0],
            secondElement: response.results[1],
          });
          setFlag(true);
        } catch {
          setFlag(false);
        }
      });
    };
    loadData();
  }, []);
  if (flag === true) {
    return (
      <div className={Classes.ContainerMain}>
        <h1>Latest Releases</h1>
        <div className={Classes.BooksSection}>
          <div className={Classes.first}>
            <BookDetail
              isReverse={false}
              bookTitle={dataValues.firstElement.book_details.title}
              authorName={dataValues.firstElement.book_details.authors}
              imageUrl={dataValues.firstElement.image}
              description={dataValues.firstElement.book_details.description}
            />
          </div>
          <div>
            <BookDetail
              isReverse={true}
              bookTitle={dataValues.secondElement.book_details.title}
              authorName={dataValues.secondElement.book_details.authors}
              imageUrl={dataValues.secondElement.image}
              description={dataValues.secondElement.book_details.description}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div>hello</div>;
  }
}
