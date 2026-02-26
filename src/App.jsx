//importo le pages che ho creato

import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
import NotFoundPage from "./pages/NotFoundpage"

//importo il layout

import DefaultLayout from "./layouts/DefaultLayout"

// importo da react-router-dom la libreria delle rotte

import { BrowserRouter, Routes, Route } from "react-router-dom"

// importo il provider del contesto globale

import { GlobalProvider } from "./../context/GlobalContext"


function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
