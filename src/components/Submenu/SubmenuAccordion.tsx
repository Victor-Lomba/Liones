import React, { memo } from "react";
import SubmenuItems from "./SubmenuItems";
import style from "../Navbar/Navbar.module.scss";

interface ISubmenuAccordion {
    itemMenuList: any;
    oneSubmenu: string;
    setOneSubmenu: React.Dispatch<React.SetStateAction<string>>;
}

const SubmenuAccordion = ({itemMenuList, oneSubmenu, setOneSubmenu}: ISubmenuAccordion) => {

    let newItem = itemMenuList.filter((item: any) => item !== itemMenuList[0]);

    const condition = itemMenuList?.[0]?.label == oneSubmenu;
    
    function handleClick() {     
        condition ? setOneSubmenu("") : setOneSubmenu(itemMenuList?.[0]?.label);
    }

    return (
        <>
            <button 
                onClick={handleClick} 
                className={`${style.link} ${condition && style.linkOpened}`}
            >
                <span className={`${condition && style.spanOpened}`}>{itemMenuList?.[0]?.label}
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.33301 1.5L5.83301 6L10.333 1.5" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            </button>
            {condition && <SubmenuItems subLinks={newItem} setOneSubmenu={setOneSubmenu}/>}
        </>
    )
}

export default memo(SubmenuAccordion);