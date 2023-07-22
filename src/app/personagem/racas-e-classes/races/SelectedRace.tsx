import React, { useEffect, useState } from "react";
import { CharacterTable } from "./specifiedRaces/CharacterTable";
import { divImg } from "./specifiedRaces/divImg";
import style from "../styles/ClassesRaces.module.scss";
import Mutant from "./specifiedRaces/Mutant";
import AtributesTable from "./atributes/AtributesTable";

const SelectedRace = ({ selected }: any) => {
  const normalizeSelected = selected.toLowerCase().split(" ").join("-");

  const [raceInfo, setRaceInfo] = useState<any[]>([]);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    fetch("/data/races.json", {
      headers: {
        Accept: "application/json",
      },
    }).then((racesJson) =>
      racesJson.json().then((racesJson) => {
        setRaceInfo(racesJson.race);
      })
    );
  }, [normalizeSelected]);

  const hasRaceSelected = raceInfo.some((element) => element.name === selected);

  const filteredRace: any = raceInfo.filter(
    (item: any) => item?.name === selected
  );

  if (selected === "MUTANT")
    return (
      <Mutant
        viewMore={viewMore}
        setViewMore={setViewMore}
        filteredRace={filteredRace}
      />
    );

  if (!hasRaceSelected) return <></>;

  return (
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
              <button
                className={style["viewMore"]}
                onClick={() => setViewMore(!viewMore)}
              ></button>
            </div>
            <div className={style["characterDescriptionAll"]}>
              <AtributesTable
                modificadores={filteredRace?.[0].modificadores?.[0]}
              />
              <div className={style["characterDescriptionBody"]}>
                {filteredRace?.[0]?.descricao.map((item: any, index: any) => (
                  <p key={index}>{item}</p>
                ))}
                {filteredRace?.[0]?.table ? (
                  <CharacterTable table={filteredRace?.[0]?.table} />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
        {divImg(normalizeSelected, selected)}
      </div>
    </div>
  );
};

export default SelectedRace;
