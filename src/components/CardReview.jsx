const CardReview = (props) => {

    // destrutturo le props

    const {name, vote, text} = props.reviewProp;

    return (
        <div className="card mb-4">
            <div className="card-body">
                
                <p className="card-text">
                   {text}
                </p>

                <p className="mb-1">
                    <strong>Voto:</strong> {vote} / 5
                </p>

                <address className="mb-0">
                    <i>Recensione di: {name}</i>
                </address>

            </div>
        </div>
    )
}

export default CardReview