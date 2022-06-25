import MovieList from "./MovieList";
import NavBar from "./NavBar";
import { MovieProvider } from "./MovieContext";
function App() {
  return (
    <MovieProvider>
      <NavBar />
      <MovieList />
    </MovieProvider>
  );
}

export default App;
