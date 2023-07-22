import React from "react";
import style from "./CardHome.module.scss";
import Link from "next/link";
import Image from "next/image";

interface ICardProps {
  img: string;
  title: string;
  text: string;
  url: string;
}

export default function CardHome({ img, title, text, url }: ICardProps) {
  return (
    <div className={style.CardContainer}>
      <Link className={style.Card} href={url}>
        <div className={style.CardImg}>
          <Image fill src={`/images/sistema/${img}`} alt="" />
          <span />
        </div>
        <div className={style.CardText}>
          <h2 className={style.BannerTitle}>{title}</h2>
          <p className={style.BannerText}>{text}</p>
        </div>
      </Link>
    </div>
  );
}
