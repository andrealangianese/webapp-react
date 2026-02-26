// importo i componenti di React per composizione context
import { createContext, useContext, useState } from "react";

// creo contesto globale

const GlobalContext = createContext();

// creo provider per il contesto globale

export const GlobalProvider = ({ children }) => {

    // imposto var di stato per gestire i dati globali
    
    const [loading, setLoading] = useState(false);

    return (
        <GlobalContext.Provider value={{ loading, setLoading }}>
            {/* children conterrà tutta l'app */}
            {children}
        </GlobalContext.Provider>
    )
}

// creo hook per utilizzare il contesto globale

export const useGlobalContext = () => {
    // richiamo useContext per accedere al contesto globale e gli passo il contesto che ho creato
    return useContext(GlobalContext);
}