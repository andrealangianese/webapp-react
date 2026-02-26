// importiamo axios

import axios from "axios"

// importo usestate e useeffect

import { useState, useEffect } from "react"

import CardMovie from "../components/CardMovie"

// importo hook per accedere al contesto globale

import { useGlobalContext } from "../../context/GlobalContext";

// setto endpoint da richiamare nella chiamata ajax

const endpoint = 'http://localhost:3000/api/movies';


const HomePage = () => {

    // attivo var di stato globale per gestire caricamento

    const { setLoading } = useGlobalContext();

    // imposto var di stato

    const [movies, setMovies] = useState([])

    // funzione che gestirà la chiamata per index

    const fetchMovies = () => {

        // attivo caricamento (mostro loader mentre aspetto risposta)

        setLoading(true);

        axios.get(endpoint)
            .then(res => { setMovies(res.data) })
            .catch(err => {
                console.log(err);          
            })

            // quando la chiamata è finita, sia in caso di successo che di errore, disattivo caricamento (nascondo loader)
            .finally(() => {
                setLoading(false);
            })
    }

    //  eseguo funzione di rendering per farmi ritornare il listato dei movies

    const renderMovies = () =>{
        return movies.map(movie =>{
            return (
                <div className="col" key={movie.id}>
                    <CardMovie movieProp={movie} />
                </div>
            )
        })
    }

    // richiamo funzione solo al montaggio della pagina

    useEffect(fetchMovies, [])

    return (
        <>
            <h1 className="text-primary">And Movies </h1>
            <h2><i>Sarà comunque tutto testo che andrò a sostituire 'dinamicamente'</i></h2>

            <div>
                <p className="row row-cols-3 mt-4">
                    qui ci sarà l'elenco dei movie
                </p>
            </div>
            <div className="row row-cols-3 mt-4">
                {/* applico la funzione di rendering */}
                {renderMovies()}
            </div>
        </>
    )
}

export default HomePage