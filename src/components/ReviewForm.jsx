// importo useState per gestire i dati del form 
import { useState } from "react"

// importo axios per gestire la chiamata ajax

import axios from "axios"

export default function ReviewForm() {  

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
    return (
        <div className="card">
            <header className="card-header">
                <h5>Add your review</h5>
            </header>
            <div className="card-body">
                <form >
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