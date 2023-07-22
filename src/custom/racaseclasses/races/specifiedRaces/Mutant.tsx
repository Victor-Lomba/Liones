import React, { memo, useEffect, useState } from "react";
import { divImg } from "./divImg";
import style from "../../styles/classesandraces.module.scss";
import AtributesTable from "../atributes/AtributesTable";

interface IMutant {
  viewMore: boolean;
  setViewMore: (viewMore: boolean) => void;
  filteredRace: any;
}

const Mutant = ({ viewMore, setViewMore, filteredRace }: IMutant) => {
  const [modificadores, setModificadores] = useState();

  useEffect(() => {
    filteredRace.length >= 1 &&
      setModificadores(filteredRace?.[0]?.modificadores?.[0]);
  }, [filteredRace]);

  return (
    <div
      className={`${style["characterBackground"]} ${
        viewMore ? style["characterViewMore"] : ""
      }`}
    >
      <div className={style["character"]}>
        <div className={style["characterText"]}>
          <h2>Mutant</h2>
          <div className={style["characterDescription"]}>
            <div className={style["characterDescriptionHeader"]}>
              <img
                src={`../images/icons/classIcons/classSword.svg`}
                alt="Deu ruim"
              />
              <h4>Mod PV: {filteredRace?.[0]?.modVida} * mod const</h4>
              <button
                className={style["viewMore"]}
                onClick={() => setViewMore(!viewMore)}
              ></button>
            </div>
            <div className={style["characterDescriptionAll"]}>
              {modificadores && (
                <AtributesTable modificadores={modificadores} />
              )}
              <div className={style["characterDescriptionBody"]}>
                {filteredRace?.[0]?.descricao?.[0]?.introducao.map(
                  (item: any, index: any) => (
                    <p key={index}>{item}</p>
                  )
                )}
                {filteredRace?.[0]?.descricao?.[0]?.armas.map(
                  (item: any, index: any) => (
                    <p key={index}>{item}</p>
                  )
                )}
                {filteredRace?.[0]?.descricao?.[0]?.corpomutante.map(
                  (item: any, index: any) => (
                    <p key={index}>{item}</p>
                  )
                )}
                {filteredRace?.[0]?.descricao?.[0]?.habilidades.map(
                  (item: any, index: any) => (
                    <p key={index}>{item}</p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={`${style["divImg"]} ${style["divImgMutant"]}`}>
          <img src={`../images/races/mutant/mutant.png`} alt="Deu ruim" />
          <img src={`../images/races/mutant/mutant-parts.png`} alt="Deu ruim" />
          <img
            src={`../images/races/mutant/mutant-parts2.png`}
            alt="Deu ruim"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Mutant);
