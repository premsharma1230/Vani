import React, { useState, useEffect } from "react";
import Classes from "./_trendingWriter.module.scss";
import { AuthorList } from "../../api/api";
import { Link } from "react-router-dom";

export default function TrendingWriters() {
  const [writers, setWriters] = useState([]);

  useEffect(() => {
    const loadData = () => {
      AuthorList().then(res => {
        const response = res;
        setWriters(response.data);
      });
    };

    loadData();
  }, []);
  console.log(writers, "");
  return (
    <div className={Classes.sectionMain}>
      <div className={Classes.writerContainer}>
        {writers.map((ele, index) => {
          return (
            <div className={Classes.WriterAvatar} key={index}>
              <Link
                to={`/AuhorDescription/${ele?.author_details?.slug}`}
                key={ele?.author_details?.slug}
              >
                <img src={ele.author_details.image} alt="writer name" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
