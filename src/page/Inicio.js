import Inicio from "../componentes/Inicio";
import Header from "../componentes/Header";
import Comentarios from "../componentes/Comentarios";
import Carrusel from "../componentes/Carrusel";
import Footer from "../componentes/Footer";

export const Iniciopage = () => {
  return (
    <div>
       <Header />
    <Inicio />
    <Carrusel />
    <Comentarios />
    <Footer />
    </div>
  )
}
export default Iniciopage;
