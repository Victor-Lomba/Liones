import React, { memo, useEffect, useState } from "react";

const TransClass = () => {

    const [allClasses, setAllClasses] = useState([])

    useEffect(() => {
        fetch('/models/classes.json', {
            headers: {
                Accept: "application/json"
            }
        })
        .then(classesJson => classesJson.json()
        .then(classesJson => {
            setAllClasses(classesJson.classList)
        }))
    }, [])

    let arrayClasses: string[] = [];
    let arrayNiveis: number[] = [];
  
    let classe: string;
    let nivel: number;

    function pegaValor(event: any) {
        event.preventDefault();
        classe = event.target[0].value;
        nivel = parseInt(event.target[1].value);
        insereNoArray(classe, nivel);
    }

    function insereNoArray(classe: string, nivel: number) {
        if(!arrayClasses.includes(classe)) {
            arrayClasses.push(classe);
            arrayNiveis.push(nivel);
        }
        console.log(arrayClasses)
        console.log(arrayNiveis)
    }

    function resetaArray(){
        arrayClasses = [];
        arrayNiveis = [];
        console.log(arrayClasses)
        console.log(arrayNiveis)
    }

  return (
        <form onSubmit={event=>{pegaValor(event)}}>
            <select name="Classe" className="classePersonagem">
                {allClasses.map((index)=> 
                    <option value={index} className="classes">{index}</option>
                )}
            </select>
            
            <select name="Nivel" className="nivelPersonagem">
                <option disabled>Selecione seu Nivel</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            <button type="submit">
                Adicionar Classe
            </button>
            <button type="button" onClick={()=>{resetaArray()}}> Zerar Lista </button>
        </form>
  );
};

export default memo(TransClass);
