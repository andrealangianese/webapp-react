import { Outlet } from "react-router-dom"

import MainHeader from "../components/MainHeader"
import Loader from "../components/Loader"

// importo hook per accedere al contesto globale

import { useGlobalContext } from "../../context/GlobalContext";

function DefaultLayout() {

    // attivo var di stato globale per gestire caricamento

    const { loading } = useGlobalContext();

    return (
        <>
            <MainHeader />
            {loading && <Loader />}
            <main className="container">
                <Outlet />
            </main >
            <footer>ex di footer fisso</footer>
            
        </>
    )
}

export default DefaultLayout
