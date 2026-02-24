import { Link } from "react-router-dom"

const CardMovie = (props) => {

    // destrutturo le props

    const { id, title, director, genre , abstract} = props.movieProp;
    
    return (
        <div className="card mb-4">
            <img 
                src="https://m.media-amazon.com/images/I/51tiJQiWMDL._UF1000,1000_QL80_.jpg" 
                className="card-img-top" 
                alt="Titolo del film" 
            />
            
            <div className="card-body">
                <h5 className="card-title">Titolo del Film</h5>
                
                <p className="mb-1">
                    <strong>Regista:</strong> Nome Regista
                </p>
                
                <p className="mb-1">
                    <strong>Genere:</strong> Azione / Drammatico
                </p>
                
                <p className="mb-2">
                    <strong>Anno:</strong> 2024
                </p>

                <p className="card-text">
                    Questo paragrafo verrà sostituito con l'abstract del film.
                </p>

                <Link to={`movies/:id`} className="btn btn-primary">
                    See more
                </Link>
            </div>
        </div>
    )
}

export default CardMovie