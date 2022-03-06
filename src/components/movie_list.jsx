import {useState, useEffect} from 'react';
import '../App.css';
import Movie from './Movie';
import PageWrapper from './page-wrapper';
import Paginacion from './paginacion';

function MovieList() {

  const [currentPage, setCurrentPage] = useState(1);
  let [movies, setMovies] = useState([]);
  const MOVIES_PER_PAGE = 7;

  useEffect(() => {
    searchMovies();
  }, [])

  const searchMovies = async function(){
    let req = await fetch("https://lucasmoy.dev/data/react/peliculas.json");
    let json = await req.json();
    setMovies(json);
  }

  const getTotalPages = function(){
    let totalQuantityOfMovies = movies.length;
    return Math.ceil(totalQuantityOfMovies / MOVIES_PER_PAGE);
  }

  let moviesInAPage = movies.slice(
    (currentPage - 1) * MOVIES_PER_PAGE,
    currentPage * MOVIES_PER_PAGE
  );

  return (
    <PageWrapper>
      {moviesInAPage.map(pelicula => 
        <Movie titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director}
        actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
          {pelicula.descripcion}
        </Movie>
      )}
      <Paginacion pagina={currentPage} total={getTotalPages()} onChange={(pagina) => {setCurrentPage(pagina)}} />
    </PageWrapper>
  );
}

export default MovieList;
