import Header from "../componentes/Header";
import Detalle from "../componentes/Detalle";
import Footer from "../componentes/Footer";
import Bannercat from "../componentes/Bannercat";

const Detallepage = () =>{
    return (
        <div>
            <Header />
            <Bannercat />
            <Detalle />
            <Footer />
        </div>
    );
}

export default Detallepage;