import tazon from "../img/botellas.png";
import "../css/inicio.css";
function Comentarios() {
    return (
<div id="comentario" className="container">
<h2 className="titulos">Confian en nosotros</h2>
<br />
<div id="carouselExampleIndicators3" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" className="active"
      aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1"
      aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2"
      aria-label="Slide 3"></button>
  </div>
      <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row">
        <div className="col-md-4">
          <div className="single-box">
            <div className="img-area"><img src={tazon} alt="" /></div>
            <div className="img-text">
              <h2>Emprendimiento 1</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, doloremque! Vero ducimus doloribus
                minima vitae cumque? Nihil.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single-box">
            <div className="img-area"><img src={tazon} alt="" /></div>
            <div className="img-text">
              <h2>Emprendimiento 1</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, doloremque! Vero ducimus doloribus
                minima vitae cumque? Nihil.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single-box">
            <div className="img-area"><img src={tazon} alt="" /></div>
            <div className="img-text">
              <h2>Emprendimiento 1</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, doloremque! Vero ducimus doloribus
                minima vitae cumque? Nihil.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row">
        <div className="col-md-4">
          <div className="single-box">
            <div className="img-area"><img src={tazon} alt="" /></div>
            <div className="img-text">
              <h2>Emprendimiento 1</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, doloremque! Vero ducimus doloribus
                minima vitae cumque? Nihil.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single-box">
            <div className="img-area"><img src={tazon} alt="" /></div>
            <div className="img-text">
              <h2>Emprendimiento 1</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, doloremque! Vero ducimus doloribus
                minima vitae cumque? Nihil.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single-box">
            <div className="img-area"><img src={tazon} alt="" /></div>
            <div className="img-text">
              <h2>Emprendimiento 1</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, doloremque! Vero ducimus doloribus
                minima vitae cumque? Nihil.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row">
        <div className="col-md-4">
          <div className="single-box">
            <div className="img-area"><img src={tazon} alt="" /></div>
            <div className="img-text">
              <h2>Emprendimiento 1</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, doloremque! Vero ducimus doloribus
                minima vitae cumque? Nihil.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single-box">
            <div className="img-area"><img src={tazon} alt="" /></div>
            <div className="img-text">
              <h2>Emprendimiento 1</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, doloremque! Vero ducimus doloribus
                minima vitae cumque? Nihil.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single-box">
            <div className="img-area"><img src={tazon} alt="" /></div>
            <div className="img-text">
              <h2>Emprendimiento 1</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, doloremque! Vero ducimus doloribus
                minima vitae cumque? Nihil.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3"
    data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3"
    data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
        );
    }
    
    export default Comentarios;  