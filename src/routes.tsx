import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import {
  fetchPokemonDetail,
  fetchPokemonList,
} from "./services/PokemonService";
import PokemonDetail from "./pages/PokemonDetail";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={<Dashboard fetchPokemonList={fetchPokemonList} />}
      />
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path="/pokemon-detail/:id"
        element={<PokemonDetail fetchPokemonDetail={fetchPokemonDetail} />}
      />

      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
}
