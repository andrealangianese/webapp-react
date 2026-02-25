// importo useState per gestire i dati del form 
import { useState } from "react"

// importo axios per gestire la chiamata ajax

import axios from "axios"

export default function ReviewForm(props) {

    // destrutturo props per prendere id del movie a cui associare la recensione
    const { movie_id , ricaricaReviews } = props;

    // setto endpoint da richiamare nella chiamata ajax

    const endpoint = `http://localhost:3000/api/movies/${movie_id}/reviews`;

    // imposto var di stato per gestire i dati del form

    const [formData, setFormData] = useState({
        name: '',
        text: '',
        vote: 1
    })

    // funzione per gestire i cambiamenti nei campi del form
    const setFieldValue = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // funzione per gestire l'invio del form
    const handleSubmit = (e) => {
        e.preventDefault()

        // gestione chiamata ajax per inviare i dati al server
        axios.post(endpoint, formData, {
            // specifico che i dati che sto inviando sono in formato json
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                // quando avviene l'invio del form ripulsco i campi
                setFormData({
                    name: '',
                    text: '',
                    vote: 1
                })
                // richiamo con le props la funzione per ricaricare le recensioni e vedere subito quella appena inserita
                ricaricaReviews()
            })
            .catch(err => {
                console.log(err);
                // qui potrei gestire eventuali errori
            })
    }

    return (
        <div className="card">
            <header className="card-header">
                <h5>Add your review</h5>
            </header>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div className="form-group">
                        <label>Review</label>
                        <textarea className="form-control" name="text" value={formData.text} onChange={setFieldValue}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Voto</label>
                        <input type="number" name="vote" min="1" max="5" className="form-control" value={formData.vote} onChange={setFieldValue} />
                    </div>
                    <div className="d-flex justify-content-end pt-3">
                        <button type="submit" className="btn btn-primary">Give it to me</button>
                    </div>
                </form>
            </div>
        </div>
    )
}