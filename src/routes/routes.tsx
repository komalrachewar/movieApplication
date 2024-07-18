import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Routing,
} from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import MovieList from "../components/MovieList";

const Routes = () => {
  return (
    <Router>
      <Routing>
        <Route path="/" element={<MovieList />} />
        <Route path="/movieDetails" element={<MovieDetails />} />
      </Routing>
    </Router>
  );
};

export default Routes;
