import React from "react";
import Classes from "./latestRelease.module.scss";
import BookDetail from "../bookDetail/bookdetail.component";
import BookOne from "../../assets/book.png";
import BookTwo from "../../assets/booktwo.png";

export default function LatestRelease() {
  return (
    <div className={Classes.ContainerMain}>
      <h1>Latest Releases</h1>
      <div className={Classes.BooksSection}>
          <div className={Classes.first}>
              <BookDetail isReverse = {false} bookTitle={'The Psychology of Money'} authorName = {' Morgan Housel'} imageUrl={BookOne}/>
          </div>
          <div>
              <BookDetail isReverse = {true} bookTitle={'Your Heart is the Sea '} authorName = {'Nikita Gill'} imageUrl={BookTwo}/>
          </div>
      </div>
    </div>
  );
}
