import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Contactus from "./components/Contactus";
import { fetchMovies } from "./services/movieservice";
import MovieList from "./components/MovieList";
import Home from "./components/Home";
import "./App.css";

// Define the Movie type for TypeScript safety
interface Movie {
  id: number;
  title: string;
  poster_path: string;  // Add poster_path to the Movie type
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);  // This will now be an array of movies with correct fields
    };
    getMovies();
  }, []);

  return (
    <Router>
      <div className="container">
        <div className="box">
          <div className="heading">
            <Header />
          </div>
          <div className="description">This is a UI Layout with CSS</div>
          <div className="button">Click me</div>

          {/* Define the routes here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contactus />} />
          </Routes>
        </div>

        {/* Pass movies prop to MovieList */}
        <MovieList movies={movies} />
      </div>
    </Router>
  );
};

export default App;
