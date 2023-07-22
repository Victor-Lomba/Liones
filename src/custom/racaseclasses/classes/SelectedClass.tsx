import React, { memo, useEffect, useState } from "react";
import removeAcento from "../../../common/removeAcento";
import { CharacterTable } from "./specifiedClasses/CharacterTable";
import { divImg } from "./specifiedClasses/divImg";
import style from "../styles/classesandraces.module.scss";

const SelectedClass = ({ selected }: any) => {
  const normalizeSelected = removeAcento(
    selected.toLowerCase().split(" ").join("-")
  );

  const [classInfo, setClassInfo] = useState<any[]>([]);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    fetch("/models/classes.json", {
      headers: {
        Accept: "application/json",
      },
    }).then((classesJson) =>
      classesJson.json().then((classesJson) => {
        setClassInfo(classesJson.class);
      })
    );
  }, [normalizeSelected]);

  const hasClassSelected = classInfo.some(
    (element) => element.name === selected
  );

  const filteredClass: any = classInfo.filter(
    (item: any) => item?.name === selected
  );

  if (!hasClassSelected) return <></>;

  return (
    <>
      <div
        className={`${style["characterBackground"]} ${
          viewMore ? style["characterViewMore"] : ""
        }`}
      >
        <div className={style["character"]}>
          <div className={style["characterText"]}>
            <h2 className={style.desktop}>{selected}</h2>
            <div className={style["characterDescription"]}>
              <div className={style["characterDescriptionHeader"]}>
                <img
                  src={`/images/icons/classIcons/classSword.svg`}
                  alt="Deu ruim"
                />
                <h4>Mod PV: {filteredClass?.[0]?.modVida} * mod const</h4>
                <button
                  className={style["viewMore"]}
                  onClick={() => setViewMore(!viewMore)}
                ></button>
              </div>
              <div className={style["characterDescriptionBody"]}>
                {filteredClass?.[0]?.habilities.map((item: any, index: any) => (
                  <p key={index}>{item}</p>
                ))}
                {filteredClass?.[0]?.table ? (
                  <CharacterTable table={filteredClass?.[0]?.table} />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          {divImg(normalizeSelected, selected)}
        </div>
      </div>
    </>
  );
};

export default memo(SelectedClass);
