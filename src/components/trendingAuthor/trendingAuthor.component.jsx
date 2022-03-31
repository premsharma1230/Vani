import React from "react";
import Classes from "./trendingAuthor.module.scss";
import CustomeButton from "../customeButton/customeButton.component";
import Book from "./book.png";

export default function TrendingAuthor() {
  const author =
    "https://i2.pickpik.com/photos/760/255/766/people-portrait-adult-men-preview.jpg";
  return (
    <div className={Classes.sectionMain}>
      <div className={Classes.contentArea}>
        <div className={Classes.bookImage}>
          <img src={Book} alt="book name" />
        </div>
        <div className={Classes.bookDescription}>
          <h1>The Psychology of Money</h1>
          <h2>By Morgan Housel</h2>
          <h6>Stars</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
            faucibus tempor mauris massa. Vestibulum, facilisis aliquam tellus
            nunc, convallis ultrices eget velit. Auctor vitae aliquet nec et
            elementum nullam purus. Dignissim semper in vulputate turpis massa.
            Neque amet, fusce scelerisque a tellus tempus elementum augue et. Et
            arcu est vestibulum accumsan sed dictumst eget.
          </p>
        </div>
        <div className={Classes.authorDescription}>
          <img src={author} alt="author picture" />
          <CustomeButton name={"LEARN ABOUT AUTHOR"} accent={true}/>
        </div>
      </div>
    </div>
  );
}
