import banner1 from "../img/bn1-01.png"
import banner2 from "../img/bn1-02.png"
import banner3 from "../img/bn1-03.png"
import parati from "../img/para_ti.png"
import institu from "../img/instituciones.png"
import empresa from "../img/empresas.png"
import "../css/inicio.css";
function Inicio() {
  return (

    <div id="bodys">
           <div id="banner">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="10000">
              <img src={banner1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-interval="2000">
              <img src={banner2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banner3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br /><br />
      <div id="services">
        <div className="container">
          <h2 className="titulos">Buscas servicio</h2>
          <div className="row">
            <div className="col-lg-4 mt-4">
              <div className="card servicesCard">
                <div className="card-body text-center">
                  <i className="fa-solid fa-user iconStyle" style={{ color: "#6bbbb5" }}></i>
                  <h4 className="card-title titulotarjeta">Para ti</h4>
                  <p className="ptarjeta">Encuentra el producto que más te gusta y personalizalo con lo que tu quieras(poleras, polerones y más)</p>
                  <button type="button" href="/Inicio/Catalogo/index.html" className="btn btn-n">Más info</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <div className="card servicesCard">
                <div className="card-body text-center">
                  <i className="fa-solid fa-school iconStyle" style={{ color: "#6bbbb5" }}></i>
                  <h4 className="card-title titulotarjeta">Colegios</h4>
                  <p className="ptarjeta">Realizamos agendas de comunicaciones personalizadas, contamos con regalos corporativos </p>
                  <button type="button" href="/Inicio/Empresa/index.html" className="btn btn-n">Más info</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <div className="card servicesCard">
                <div className="card-body text-center">
                  <i className="fa-solid fa-building iconStyle" style={{ color: "#6bbbb5" }}></i>
                  <h4 className="card-title titulotarjeta">Empresas</h4>
                  <p className="ptarjeta">Branding y regalos corporativos para empresas(lapices, llaveros, boteelas y mucho más)</p>
                  <button type="button" href="/Inicio/Empresa/index.html" className="btn btn-n">Más info</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <br /><br />
      <div id="imagenesJuntas">
          <div className="card-group">
            <div className="card">
              <img src={parati} className="card-img-top" alt="..." />
            </div>
            <div className="card">
              <img src={institu} className="card-img-top" alt="..." />
            </div>
            <div className="card">
              <img src={empresa} className="card-img-top" alt="..." />

            </div>
          </div>
        </div>






    </div>




  );
}

export default Inicio;
