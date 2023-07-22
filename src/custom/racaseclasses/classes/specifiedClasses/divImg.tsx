import React from "react";
import style from "../../styles/classesandraces.module.scss";

// Imagens das classes especificando as que tem algo diferente
export function divImg(text: string, selected: string) {
  console.log(text);
  switch (text) {
    case "raizen":
      return (
        <div className={style["divImg"]}>
          <img src={`../images/classes/retalhador.png`} alt="Deu ruim" />
          <img src={`../images/classes/glacinata.png`} alt="Deu ruim" />
          <h2 className={style.mobile}>{selected}</h2>
        </div>
      );
    case "sacerdote-/-shaman":
      return (
        <div className={style["divImg"]}>
          <img src={`../images/classes/sacerdote.png`} alt="Deu ruim" />
          <h2 className={style.mobile}>{selected}</h2>
        </div>
      );
    default:
      return (
        <div className={style["divImg"]}>
          <img src={`../images/classes/${text}.png`} alt="Deu ruim" />
          <h2 className={style.mobile}>{selected}</h2>
        </div>
      );
  }
}
