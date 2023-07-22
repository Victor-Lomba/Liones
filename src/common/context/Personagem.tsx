import { useState } from 'react';
import { createContext } from 'react';

export const PersonagemContext = createContext({raca: "", setRaca: (raca: string) => {}});
PersonagemContext.displayName = "ContextoPersonagem";

export const PersonagemProvider = ({ children }: { children : React.ReactNode }) => {

    const [raca, setRaca] = useState("");

    return (
        <PersonagemContext.Provider value={{
            raca,
            setRaca
        }}>
            {children}
        </PersonagemContext.Provider>
    )
}