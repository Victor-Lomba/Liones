import React from "react";

// Table de Armadura do Bárbaro
export const CharacterTable = ({table}: any) => {
    return (
        <div>
            <div>
                <h3>Nivel</h3>
                {table?.nivel?.map((eachLevel: any, index: any) => (
                    <p key={index}>{eachLevel}</p>
                ))}
            </div>

            {table?.armadura &&
                <div>
                    <h3>Armadura</h3>
                    {table?.armadura?.map((eachArmor: any, index: any) => (
                        <p key={index}>{eachArmor}</p>
                    ))}
                </div> 
            }

            {table?.dano && 
                <div>
                    <h3>Dano</h3>
                    {table?.dano?.map((eachDamage: any, index: any) => (
                        <p key={index}>{eachDamage}</p>
                    ))}
                </div> 
            }
        </div>
    )
}
