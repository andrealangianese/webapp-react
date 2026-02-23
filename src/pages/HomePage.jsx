import CardMovie from "../components/CardMovie"

const HomePage = () => {
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
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
             </div>
        </>
    )
}

export default HomePage