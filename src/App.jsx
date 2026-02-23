//importo le pages che ho creato

import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"

//importo il layout

import DefaultLayout from "./layouts/DefaultLayout"

// importo da react-router-dom la libreria delle rotte

import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/movies/:id" element={<MoviePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
