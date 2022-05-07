import React, { useState } from "react";

export default function BottonShort(props) {
  console.log(props, "props++++++");
  const [shortData, setShortData] = useState(false);
  const [filter, setFilter] = useState(true);
  const handleFilter = () => {
    setFilter(!filter);
    props.Filter(!filter);
    setShortData(false);
  };

  const handleShort = () => {
    setShortData(!shortData);
    props.Filter(false);
  };

  return (
    <>
      <div className="BottonShort_Wrapper">
        <ul>
          <li onClick={handleShort}>
            <i className="fas fa-sort short-icon"></i>
            <span>Sort</span>
          </li>
          <li onClick={handleFilter}>
            <i className="fas fa-filter filter-icon"></i>
            <span>Filter</span>
          </li>
        </ul>
      </div>
      {/* Sort */}
      {shortData ? (
        <>
          <div className="Short_Wrapper">
            {" "}
            <div className="BeforeBlur"></div>
            <div className="Short_head">
              <h2>Short</h2>
              <span onClick={() => setShortData(false)}>
                <i className="fas fa-times close"></i>
              </span>
            </div>
            <div className="Short-Content">
              <ul>
                <li>
                  <h4>Price : High to Low</h4>
                </li>
                <li>
                  {" "}
                  <h4>Price : Low to High</h4>
                </li>
                <li>
                  {" "}
                  <h4>Ascending</h4>
                </li>
                <li>
                  <h4>Descending</h4>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : null}
      {/* sort--end---here */}
    </>
  );
}
