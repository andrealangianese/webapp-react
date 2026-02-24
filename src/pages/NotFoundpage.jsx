import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <>
            <h1 className="h-100 justify-content-center"> La pagina che stai cercando non è stata trovata</h1>
            <Link className="h-50 justify-content-center" to='/'>Ritorna alla home</Link>
        </>
    )
}