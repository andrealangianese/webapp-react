import { Outlet } from "react-router-dom"

import MainHeader from "../components/MainHeader"

function DefaultLayout() {

    return (
        <>
            <MainHeader />
            <main className="container">
                <Outlet />
            </main >
            <footer>ex di footer fisso</footer>
        </>
    )
}

export default DefaultLayout
