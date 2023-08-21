import Header from "../componentes/Header";
import Catalogo from "../componentes/Catalogo";
import Footer from "../componentes/Footer";
import Bannercat from "../componentes/Bannercat";

const Catalogopage = () =>{
    return (
        <div>
            <Header />
            <Bannercat />
            <Catalogo />
            <Footer />
        </div>
    );
}

export default Catalogopage;