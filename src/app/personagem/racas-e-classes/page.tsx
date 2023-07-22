"use client";

import React, { useState } from "react";
import OpenClasses from "./classes/OpenClasses";
import OpenRaces from "./races/OpenRaces";
import style from "./styles/ClassesRaces.module.scss";

const NotSelected = () => {
  return (
    <div className={style.NotSelected}>
      <h3>Escolha uma raça ou classe</h3>
      <p>para lhe darmos as informações</p>
    </div>
  );
};

const RacasEClasses = () => {
  const [selected, setSelected] = useState();

  return (
    <section className={style["mainBackground"]}>
      {!selected && <NotSelected />}
      <OpenClasses selected={selected} setSelected={setSelected} />
      <OpenRaces selected={selected} setSelected={setSelected} />
    </section>
  );
};

export default RacasEClasses;
