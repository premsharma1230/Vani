import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import Carousel from "react-elastic-carousel";

export const ClientView = () => {
  const Image = [
    { img: image1 },
    { img: image2 },
    { img: image3 },
    { img: image2 },
    { img: image4 },
    { img: image3 },
    { img: image2 },
  ];

  return (
    <>
      <div className="Client_Wrapper">
        <div className="Client_img">
          <Carousel
            itemsToShow={4}
            showArrows={false}
            enableAutoPlay={true}
            className="LatestCarousel_Wrap"
          >
            {Image?.map((item, index) => (
              <figure key={index}>
                <img src={item?.img} alt="image" />
              </figure>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};
