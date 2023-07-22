import React, { memo, useState } from "react";
import AllClasses from "./AllClasses";
import style from "../styles/classesandraces.module.scss";
import SelectedClass from "./SelectedClass";

interface IProps {
  selected: undefined;
  setSelected: React.Dispatch<React.SetStateAction<undefined>>;
}

const OpenClasses = ({selected, setSelected}: IProps) => {
  const [openContainer, setOpenContainer] = useState(false);

  return (
    <>
      <section
        className={`${style.openDiv} ${style.Class}`}
        onClick={() => setOpenContainer(!openContainer)}
      >
        <button className={`${style.openButton} ${style.openButton}Class`}>
          Classes
        </button>
      </section>
      {openContainer && <button
        onClick={() => setOpenContainer(false)}
        className={`${style.closeButton} ${style.closeButton}Class`}
      ></button>}
      {openContainer && <AllClasses selected={selected} setSelected={setSelected} setOpenContainer={setOpenContainer}/>}
      {selected ? <SelectedClass selected={selected} /> : <></>}
    </>
  );
};

export default memo(OpenClasses);
