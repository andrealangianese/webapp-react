import { Outlet } from "react-router-dom"

import MainHeader from "../components/MainHeader"
import Loader from "../components/Loader"

function DefaultLayout() {

    // creo var temporanea per simulare caricamento dati

    const loading = true;
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
