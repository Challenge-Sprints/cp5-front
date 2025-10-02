import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/rodape";

export default function App() {

  return (
    <>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </>
  )
}