import { createContext, useState } from "react";
import movies from "./data/Data";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [allMovies, setAllMovies] = useState(movies);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const showFavorites = () => {
    setFavoriteMovies(
      movies.filter((el) => {
        return el.favorite === true;
      })
    );
  };
  const addToFavorites = (id) => {
    let selectedMovie = allMovies.filter((el) => {
      return el.id === id;
    });
    selectedMovie[0].favorite = true;
    showFavorites();
  };
  const removeFromFavorites = (id) => {
    let selectedMovie = allMovies.filter((el) => {
      return el.id === id;
    });
    selectedMovie[0].favorite = false;
    showFavorites();
  };

  //Search logic

  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");

  const [searchedMovies, setSearchedMovies] = useState([...allMovies]);

  const getGenre = (value) => {
    setGenre(value);
  };

  const getYear = (value) => {
    setYear(value);
  };

  const getTitle = (value) => {
    setTitle(value);
  };

  const Reset = () => {
    setGenre("");
    setYear("");
    setTitle("");
    setSearchedMovies([...allMovies]);
  };

  // rating === 'Higher to lower' ?
  // searchedMovies.sort((a,b) => b.rating-a.rating) :
  // searchedMovies.sort((a,b) => a.rating-b.rating) ;
  // return searchedMovies;

  const Search = () => {
    if (genre !== "" && year !== "" && title !== "") {
      setSearchedMovies((prevState) =>
        prevState.filter((el) => {
          return (
            el.genres.includes(genre) &&
            el.year === parseInt(year) &&
            el.name.includes(title)
          );
        })
      );
    }

    if (genre !== '' && year !== ''){
        setSearchedMovies((prevState) =>
        prevState.filter((el) => {
          return (
            el.genres.includes(genre) &&
            el.year === parseInt(year)
          );
        })
      );
    }

    if (genre !== '' && title !== ''){
        setSearchedMovies((prevState) =>
        prevState.filter((el) => {
          return (
            el.genres.includes(genre) &&
            el.name.includes(title)
          );
        })
      );
    }

    if (year !== '' && title !== ''){
        setSearchedMovies((prevState) =>
        prevState.filter((el) => {
          return (
            el.year === parseInt(year) &&
            el.name.includes(title)
          );
        })
      );
    }


    if (genre !== ''){
        setSearchedMovies((prevState) =>
        prevState.filter((el) => {
          return (
            el.genres.includes(genre)
          );
        })
      );
    }

    if (year !== ''){
        setSearchedMovies((prevState) =>
        prevState.filter((el) => {
          return (
            el.year === parseInt(year)
          );
        })
      );
    }

    if(title.length > 0){
        setSearchedMovies((prevState) =>
        prevState.filter((el) => {
          return el.name.includes(title)
        })
      );
    }

  };

  return (
    <MovieContext.Provider
      value={{
        allMovies,
        favoriteMovies,
        addToFavorites,
        removeFromFavorites,
        searchedMovies,
        getGenre,
        getYear,
        getTitle,
        Search,
        Reset,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
