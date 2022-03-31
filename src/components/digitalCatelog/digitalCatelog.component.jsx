import React from "react";
import Classes from "./_digitalCatelog.module.scss";
import CatelogCard from "./catelogCard.component";

export default function DigitalCatelog() {
  const imageOne =
    "https://cdn.vox-cdn.com/thumbor/eRSuJHAxW5N26Tow_jzlIZiu0Y4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13391935/akrales_181101_3056_0224.jpg";
  const imageTwo =
    "https://images.theconversation.com/files/361577/original/file-20201005-18-lmf7w7.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop";
  return (
    <div className={Classes.containerMain}>
      <h1>
        <span>Digital</span> Catelog
      </h1>
      <div className={Classes.catelogContainer}>
        <CatelogCard sectionTitle={"E-Books"} imageUrl={imageOne} />
        <CatelogCard sectionTitle={"Audio Books"} imageUrl={imageTwo} />
      </div>
    </div>
  );
}
