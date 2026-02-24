// importiamo axios

import axios from "axios"

// importo usestate e useeffect

import { useState, useEffect } from "react"

import CardMovie from "../components/CardMovie"


const HomePage = () => {

    // imposto var di stato

    const [movies, setMovies] = useEffect([])

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