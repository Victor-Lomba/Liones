import React, { useContext } from 'react';
import { PersonagemContext } from './Personagem';

export const PersonagemContexto = () => {

    let context = useContext(PersonagemContext);
    context.setRaca("Guerreiro");
    console.log(context.raca);

    return (null)
}