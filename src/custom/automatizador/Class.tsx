import React, { memo, useState } from "react";
import TransClass from "./TransClass";

const Class = () => {

    const [actualClass, newClass] = useState<any>([]);

    return (
        <div>
            <TransClass></TransClass>
            {actualClass.map(() => <TransClass></TransClass>)}  
            
            <button type="submit" onClick={() => newClass((current: any)=>[...current, 'Class'])}>Adicionar Tranclasse</button>
            <button type="submit">
                X
            </button>
        </div>
    )
}

export default memo(Class);