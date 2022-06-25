import { useState, createContext } from "react";

export const MovieContext = createContext();
export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([
    {
      name: "Harry Porter",
      price: "$100",
      id: 12345
    },
    {
      name: "Game of Thrones",
      price: "$50",
      id: 1243
    },
    {
      name: "Inception",
      price: "$140",
      id: 1234
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
}
