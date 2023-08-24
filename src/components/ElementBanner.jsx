import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import Slider from "react-slick";

import {
  bannerFeatures,
  informationBannerReducer,
} from "../features/InformationBanner";

const ElementBanner = () => {
  const dispatch = useDispatch();
  const information = useSelector(informationBannerReducer);

  useEffect(() => {
    dispatch(bannerFeatures());
  }, [dispatch]);

  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1.4,
        slidesToScroll: 1,
      },
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.8, // Menampilkan 3 carousel dalam 1 frame
    slidesToScroll: 1,
    responsive: responsiveSettings,
  };

  return (
    <>
      <div className="container_Info_banner">
        <p className=" is-size-6 has-text-weight-bold pb-3">
          Temukan promo menarik
        </p>
        <Slider {...settings}>
          {Object.values(information).map((item) => (
            <div className="list" key={item.id}>
              <img src={item.banner_image} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ElementBanner;
