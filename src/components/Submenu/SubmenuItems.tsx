import React, { memo } from "react";
import style from "./Submenu.module.scss";
import Image from "next/image";
import Link from "next/link";

interface SubmenuItemsProps {
  subLinks: any;
  setOneSubmenu: React.Dispatch<React.SetStateAction<string>>;
  setOpenMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubmenuItems = ({
  subLinks,
  setOneSubmenu,
  setOpenMenu,
}: SubmenuItemsProps) => {
  const retorno = (mapItem: any) => {
    switch (mapItem.label) {
      case "Ficha de Personagem":
        return "https://drive.google.com/uc?id=1zrTQVm4EoWrH2sI5t1A7XXb1DkFr-BWM&export=download";
      case "Mochila":
        return "https://drive.google.com/uc?id=1fzTLTNmbTviRY_JigKM4a7FKvcSdmrui&export=download";
      default:
        return mapItem.to;
    }
  };

  return (
    <div
      className={style.submenuGroup}
      onClick={() => {
        setOneSubmenu("");
        setOpenMenu && setOpenMenu(false);
      }}
    >
      {subLinks.map((eachItem: any) => {
        return (
          <div key={eachItem.label} className={style.eachCard}>
            <Link
              href={retorno(eachItem)}
              className={style.submenuGroup__subLink}
            >
              {eachItem.label}
              <div className={style.submenuItemImage}>
                {eachItem.img ? (
                  <Image fill src={`/images/sistema/${eachItem.img}`} alt="" />
                ) : (
                  <Image
                    fill
                    src="/images/sistema/sistemaConstrucao.jpg"
                    alt=""
                  />
                )}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SubmenuItems;
