import React, { memo, useEffect, useState } from "react";
import style from "../styles/classesandraces.module.scss";

interface IAllRaces {
  selected: undefined,
  setSelected: React.Dispatch<React.SetStateAction<undefined>>,
  setOpenContainer: React.Dispatch<React.SetStateAction<boolean>>
}

const AllRaces = ({selected, setSelected, setOpenContainer}: IAllRaces) => {
  const [allRaces, setAllRaces] = useState([]);

  function handleClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: never
  ) {
    e.preventDefault();
    setSelected(item);
    setOpenContainer(false);
  }

  useEffect(() => {
    fetch("/models/races.json", {
      headers: {
        Accept: "application/json",
      },
    }).then((racesJson) =>
      racesJson.json().then((racesJson) => {
        setAllRaces(racesJson.racesList.sort());
      })
    );
  }, [selected]);

  return (
    <>
      <div className={style.allRaces}>
        <div className={style.allRacesInside}>
          {allRaces.map((item, index) => (
            <button
              className={style.eachClass}
              key={index}
              onClick={(e) => handleClick(e, item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(AllRaces);
