import { Link } from "react-router-dom"

const CardMovie = (props) => {

    // destrutturo le props

    const { id, title, director, genre , abstract, image , release_year} = props.movieProp;

    return (
        <div className="card mb-4">
            <img 
                src={image} 
                className="card-img-top" 
                alt={title}
            />
            
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                
                <p className="mb-1">
                    <strong>Regista:</strong> {director}
                </p>
                
                <p className="mb-1">
                    <strong>Genere:</strong> {genre}
                </p>
                
                <p className="mb-2">
                    <strong>Anno:</strong> {release_year}
                </p>

                <p className="card-text">
                    <strong>Plot:</strong> {abstract}
                </p>

                <Link to={`movies/${id}`} className="btn btn-primary">
                    See more
                </Link>
            </div>
        </div>
    )
}

export default CardMovie