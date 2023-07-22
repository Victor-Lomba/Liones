import React, { memo, useEffect, useState } from "react";
import style from "../styles/classesandraces.module.scss";

interface IAllClasses {
  selected: undefined,
  setSelected: React.Dispatch<React.SetStateAction<undefined>>,
  setOpenContainer: React.Dispatch<React.SetStateAction<boolean>>
}

const AllClasses = ({selected, setSelected, setOpenContainer}: IAllClasses) => {
  const [allClasses, setAllClasses] = useState([]);

  function handleClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: never
  ) {
    e.preventDefault();
    setSelected(item);
    setOpenContainer(false);
  }

  useEffect(() => {
    fetch("/models/classes.json", {
      headers: {
        Accept: "application/json",
      },
    }).then((classesJson) =>
      classesJson.json().then((classesJson) => {
        setAllClasses(classesJson.classList.sort());
      })
    );
  }, [selected]);

  return (
    <>
      <div className={style.allClasses}>
        <div className={style.allClassesInside}>
          {allClasses.map((item, index) => (
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

export default memo(AllClasses);
