import React from "react";
import style from "../../styles/classesandraces.module.scss";

// Imagens das classes especificando as que tem algo diferente
export function divImg(text: string, selected: string) {
  return (
    <div className={style["divImg"]}>
      <img src={`../images/races/${text}.png`} alt="Deu ruim" />
      <h2 className={style.mobile}>{selected}</h2>
    </div>
  );
}
