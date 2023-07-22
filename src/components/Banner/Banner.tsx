import React from "react";
import style from "./Banner.module.scss";
import Image from "next/image";

interface IBannerProps {
  img: string;
  imgMobile: string;
  title: string;
  titleBold: string;
  text: string;
}

const Banner = ({ img, imgMobile, title, titleBold, text }: IBannerProps) => {
  return (
    <div className={style.BannerContent}>
      <div className={style.Banner}>
        <div className={style.BannerTextContainer}>
          <h2 className={style.BannerTitle}>
            {title}
            <b>{titleBold}</b>
          </h2>
          <p className={style.BannerText}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
