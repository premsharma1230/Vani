import { React, useEffect, useState } from "react";
import classes from "./_homePageLogos.scss";
import { GetHomePageLogos } from "../../api/api.js";

export default function HomePageLogos() {
  const [logosData, setLogosData] = useState([]);
  useEffect(() => {
    const loadData = () => {
      GetHomePageLogos().then(res => {
        const response = res;
        setLogosData(response.data);
      });
    };
    loadData();
  }, []);
  return (
    <div className={classes.row}>
      <div className={classes.column}>
        {logosData.map((ele, index) => {
          return <img src={ele.image} alt="writer name" key={index} />;
        })}
      </div>
    </div>
  );
}
