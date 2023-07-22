import React, { memo, useState } from "react";
import AllRaces from "./AllRaces";
import style from "../styles/classesandraces.module.scss";
import SelectedRace from "./SelectedRace";

interface IProps {
  selected: undefined;
  setSelected: React.Dispatch<React.SetStateAction<undefined>>;
}

const OpenRaces = ({selected, setSelected}: IProps) => {
  const [openContainer, setOpenContainer] = useState(false);

  return (
    <>
      <section
        className={`${style.openDiv} ${style.Race}`}
        onClick={() => setOpenContainer(!openContainer)}
      >
        <button className={`${style.openButton} ${style.openButton}Race`}>
          Raças
        </button>
      </section>
      {openContainer && <button
        onClick={() => setOpenContainer(false)}
        className={`${style.closeButton} ${style.closeButton}Race`}
      ></button>}
      {openContainer && <AllRaces selected={selected} setSelected={setSelected} setOpenContainer={setOpenContainer}/>}
      {selected ? <SelectedRace selected={selected} /> : <></>}
    </>
  );
};

export default memo(OpenRaces);
