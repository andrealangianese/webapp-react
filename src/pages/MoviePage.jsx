// importiamo axios

import axios from "axios"

// importo usestate e useeffect

import { useState, useEffect } from "react"

// importo useparams per gestire id dinamico

import { useParams , useNavigate} from "react-router-dom";

import CardReview from "../components/CardReview"

// setto endpoint da richiamare nella chiamata ajax

const endpoint = 'http://localhost:3000/api/movies';


const MoviePage = () => {

    // prendo id dinamicamente

    const { id } = useParams();

    // creo istanza di navigate per poter reindirizzare l'utente

    const redirect =useNavigate()

    // imposto var di stato

    const [moviesReview, setMoviesReview] = useState({})

    // funzione che gestirà la chiamata per show

    const fetchMovieReview = () => {
        axios.get(`${endpoint}/${id}`)
            .then(res => { setMoviesReview(res.data) })
            .catch(err => {
                console.log(err);
                if(err.status = 404) redirect('/')
            })
    }

    //  eseguo funzione di rendering per farmi ritornare il listato dei movies

    const renderReviews = () => {
        return moviesReview.reviews?.map(review => {
            return (
                <CardReview key={review.id} reviewProp={review} />
            )
        })
    }

    // richiamo funzione solo al montaggio della pagina, facendo così ogni volta che cambia id, riparte la chiamata.

    useEffect(() => {
        fetchMovieReview()
    }, [id])


    return (
        <>
            <h1 className="text-primary">{moviesReview.title}</h1>
            <h2><i>{moviesReview.director}</i></h2>
            <img src={moviesReview.image} alt={moviesReview.title} />

            <div>
                <p className="row row-cols-3 mt-4">
                    {/* applico la funzione di rendering */}
                    {renderReviews()}
                </p>
            </div>
        </>
    )
}

export default MoviePage