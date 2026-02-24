import CardReview from "../components/CardReview"

const MoviePage = () => {

    //importo dati temporanei per test

    const moviesReview = {
        "id": 1,
        "title": "Inception",
        "director": "Christopher Nolan",
        "genre": "Science Fiction",
        "release_year": 2010,
        "abstract": "A skilled thief is given a chance at redemption if he can successfully perform inception.",
        "image": "inception.jpg",
        "created_at": "2024-11-29T10:40:13.000Z",
        "updated_at": "2025-05-22T10:55:27.000Z",
        "reviews": [
            {
                "id": 1,
                "movie_id": 1,
                "name": "Alice",
                "vote": 5,
                "text": "A mind-bending masterpiece.",
                "created_at": "2024-11-29T10:40:13.000Z",
                "updated_at": "2024-11-29T10:40:13.000Z"
            },
            {
                "id": 2,
                "movie_id": 1,
                "name": "Bob",
                "vote": 4,
                "text": "Great visuals and a compelling story.",
                "created_at": "2024-11-29T10:40:13.000Z",
                "updated_at": "2024-11-29T10:40:13.000Z"
            },
            {
                "id": 3,
                "movie_id": 1,
                "name": "Charlie",
                "vote": 3,
                "text": "Confusing at times, but worth watching.",
                "created_at": "2024-11-29T10:40:13.000Z",
                "updated_at": "2024-11-29T10:40:13.000Z"
            }
        ]
    }

    //  eseguo funzione di rendering per farmi ritornare il listato dei movies

    const renderReviews = () => {
        return moviesReview.reviews.map(review => {
            return (
                <CardReview key={review.id} reviewProp ={review} />
            )
        })
    }

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