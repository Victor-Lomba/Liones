import React, { memo } from "react";
import SubmenuItems from "./SubmenuItems";
import style2 from "../Navbar/Navbar.module.scss";

interface ISubmenuAccordion {
    itemMenuList: any;
    oneSubmenu: string;
    setOneSubmenu: React.Dispatch<React.SetStateAction<string>>;
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubmenuAccordionMobile = ({itemMenuList, oneSubmenu, setOneSubmenu, setOpenMenu}: ISubmenuAccordion) => {

    let newItem = itemMenuList.filter((item: any) => item !== itemMenuList[0]);

    const condition = itemMenuList?.[0]?.label == oneSubmenu;

    function handleClick() {     
        condition ? setOneSubmenu("") : setOneSubmenu(itemMenuList?.[0]?.label);
    }

    return (
        <>
            <button 
                onClick={handleClick} 
                className={`${style2.link} ${condition && style2.linkOpened}`}
            >
                <span>{itemMenuList?.[0]?.label}
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.33301 1.5L5.83301 6L10.333 1.5" stroke="#404040" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>                
                </span>
            </button>
            {condition && <SubmenuItems setOpenMenu={setOpenMenu} subLinks={newItem} setOneSubmenu={setOneSubmenu}/>}
        </>
    )
}

export default memo(SubmenuAccordionMobile);