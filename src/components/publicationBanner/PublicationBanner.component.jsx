import React from "react";
import Image from "../../assets/write.png";
import CustomeButton from "../customeButton/customeButton.component";
import Classes from "./_publicationBanner.module.scss";

export default function PublicationBanner() {
  return (
    <div className={Classes.ContainerMain}>
      <div className={Classes.InfoContainer}>
        <div className={Classes.TextArea}>
          <h1>
            <span>Publish</span> with Vani Prakashan Group
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
            quisque suscipit feugiat viverra nibh. Nunc nullam pharetra faucibus
            velit. Dignissim pharetra porttitor turpis suspendisse sed justo,
            nunc. Volutpat integer viverra malesuada ut in sed vel. Ac in ac
            malesuada adipiscing mi, amet, viverra.
          </p>
          <CustomeButton name={"PUBLISH YOUR OWN BOOK"} accent={false} />
        </div>
        <div className={Classes.ImageContainer}>
          <img src={Image} alt="writer image" />
        </div>
      </div>
    </div>
  );
}
