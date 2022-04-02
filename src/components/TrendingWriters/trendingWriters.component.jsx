import React, { useState, useEffect } from "react";
import Classes from "./_trendingWriter.module.scss";
import { AuthorList } from "../../api/api";
export default function TrendingWriters() {
  const [writers, setWriters] = useState([]);

  useEffect(() => {
    const loadData = () => {
      AuthorList().then(res => {
        const response = res;
        console.log(response.data);
        setWriters(response.data);
      });
    };
    console.log(writers);

    loadData();
  }, []);
  return (
    <div className={Classes.sectionMain}>
      <div className={Classes.writerContainer}>
        {writers.map((ele, index) => {
          return (
            <div className={Classes.WriterAvatar} key={index}>
              <img src={ele.author_details.image} alt="writer name" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
