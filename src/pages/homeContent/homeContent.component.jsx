import React from "react";
import Classes from "./homeContent.module.scss";
import TrendingWriters from "../../components/TrendingWriters/trendingWriters.component";
import TrendingAuthor from "../../components/trendingAuthor/trendingAuthor.component";
import LatestRelease from "../../components/latestRelease/latestRelease.compoennt";
import DigitalCatelog from "../../components/digitalCatelog/digitalCatelog.component";
import PublicationBanner from "../../components/publicationBanner/PublicationBanner.component";
import Prefooter from "../../components/PreFooter/preFooter.component";
import AboutSection from "../../components/aboutSection/aboutSection.component";
// import {HomePageLogos} from "../../components/homeLogos/homePageLogos"
export default function HomeContent({ imageUrl }) {
  const backdrop = imageUrl;
  return (
    <>
      <div className={Classes.Encpsulater}>
        <div
          className={Classes.containerMain}
          style={{ backgroundImage: `url("${backdrop}")` }}
        >
          <div className={Classes.colorLayer}></div>
          <div className={Classes.contentLayer}>
            <h1>Vani Prakashan Group</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              pellentesque eu sit nisi, potenti ante purus vestibulum nibh.
              Tellus consequat, cum nam bibendum elementum porta scelerisque
              eleifend felis. Facilisis.
            </p>
          </div>
        </div>
        <TrendingWriters />
        <TrendingAuthor />
        <LatestRelease />
        <DigitalCatelog />
        <PublicationBanner />
        <AboutSection />
        {/* <HomePageLogos/> */}
        <div className={Classes.prefooter}>
          <Prefooter />
        </div>
      </div>
    </>
  );
}
