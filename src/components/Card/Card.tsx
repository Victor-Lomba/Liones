import React, { memo } from "react";
import style from "./Card.module.scss";
import Image from "next/image";

interface ICardProps {
  img: string;
  title: string;
  text: string;
  montariaCapacidade: number | number[];
  montariaDeslocamento: number | number[];
}

export const Card = ({
  img,
  title,
  text,
  montariaCapacidade,
  montariaDeslocamento,
}: ICardProps) => {
  console.log(img);

  return (
    <div
      className={`${style.CardContainer} ${
        montariaCapacidade && style.Montaria
      }`}
    >
      <div className={style.CardImg}>
        <Image fill src={`/images/mounts/${img}.jpg`} alt="" />
        <span />
      </div>
      <div className={style.CardText}>
        <h2 className={style.CardTitle}>{title}</h2>
        <p className={style.CardText}>{text}</p>
        {montariaCapacidade && montariaDeslocamento && (
          <div className={style.CardMontaria}>
            <p>Capacidade de Pessoas: {montariaCapacidade}</p>
            <p>Deslocamento por Turno: {montariaDeslocamento}</p>
          </div>
        )}
      </div>
    </div>
  );
};
