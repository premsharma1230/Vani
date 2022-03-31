import React from "react";
import CustomeButton from "../customeButton/customeButton.component";
import Classes from "./_aboutSection.module.scss";

export default function AboutSection() {
  return (
    <div className={Classes.AboutMain}>
      <div className={Classes.flexContainer}>
        <div className={Classes.ImageContainer}>
          <img
            src="https://i.etsystatic.com/21013327/r/il/2f417c/2262775482/il_340x270.2262775482_3fp6.jpg"
            alt="about image"
          />
        </div>
        <div className={Classes.ContentArea}>
          <h1>Who we Are ?</h1>
          <div className={Classes.desc}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              pellentesque eu sit nisi, potenti ante purus vestibulum nibh.
              Tellus consequat, cum nam bibendum elementum porta scelerisque
              eleifend felis. Facilisis.
            </p>
          </div>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
          <CustomeButton name={"KNOW MORE"} accent={true} />
        </div>
      </div>
    </div>
  );
}
