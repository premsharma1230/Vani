import React from "react";
import CustomeButton from "../customeButton/customeButton.component";
import Classes from "./_digitalCatelog.module.scss";

export default function CatelogCard({ sectionTitle, imageUrl }) {
  return (
    <div className={Classes.CatelogCard}>
      <div>
        <h1>{sectionTitle}</h1>
      </div>
      <div>
        <img src={imageUrl} alt="imagedescription" />
      </div>
      <div className={Classes.descArea}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor dui sed
          sed lectus
        </p>
      </div>
      <div>
        <CustomeButton name={"Discover"} accent={true} />
      </div>
    </div>
  );
}
