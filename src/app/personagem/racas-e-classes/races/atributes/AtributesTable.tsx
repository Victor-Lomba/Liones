import React from "react";
import style from "./AtributesTable.module.scss";

interface IAtributeRow {
    modificadores: any;
    modificadorName: string;
}

const AtributeRow = ({modificadores, modificadorName}: IAtributeRow) => {
    return (
        <tr>
            <td>{modificadorName}</td>
            <td>{modificadores[modificadorName]}</td>
        </tr>
    );
};

const AtributesTable = ({ modificadores }: any) => {
    return (
        <div>
            <table className={style.atributesTable}>
                <thead>
                    <tr>
                        <th>Atributo</th>
                        <th>Modificador</th>
                    </tr>
                </thead>
                <tbody>
                    <AtributeRow modificadores={modificadores} modificadorName="forca" />
                    <AtributeRow modificadores={modificadores} modificadorName="destreza" />
                    <AtributeRow modificadores={modificadores} modificadorName="constituicao" />
                    <AtributeRow modificadores={modificadores} modificadorName="carisma" />
                    <AtributeRow modificadores={modificadores} modificadorName="inteligencia" />
                    <AtributeRow modificadores={modificadores} modificadorName="sabedoria" />
                    <AtributeRow modificadores={modificadores} modificadorName="extra" />
                </tbody>
            </table>
        </div>
    );
};

export default AtributesTable;
