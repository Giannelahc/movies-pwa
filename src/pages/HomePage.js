import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MovieCardSkeleton from '../components/MovieCardSkeleton';
import { useEffect } from "react";
import Row from "../components/Row";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovies,
  getMoviesStatus,
  selectAllMovies,
} from "../slices/movieSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const status = useSelector(getMoviesStatus);
  const movies = useSelector(selectAllMovies);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getMovies());
    }
  });

  return (
    <div
      className="page"
      style={{ backgroundColor: "#111", overflow: "hidden" }}
    >
      <Navbar />
      <Banner />

      {status === "loading" || status === "idle" ? (
        <div style={{ display: "flex", flexWrap: "wrap", padding: "2rem" }}>
          {Array(12)
            .fill()
            .map((_, idx) => (
              <MovieCardSkeleton key={idx} />
            ))}
        </div>
      ) : (
        Object.keys(movies).map((title) => (
          <Row key={title} title={title} movies={movies[title]} />
        ))
      )}
    </div>
  );
};

export default HomePage;
