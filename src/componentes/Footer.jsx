import ubicacionn from "../imgcont/ubicacion-01.png"
import ig from "../imgcont/ig-02.png"
import wsp from "../imgcont/wasap-03.png"
import trans from "../imgcont/logos-transbank-2.png"
import logi from "../imgcont/LOGO2.png"
import "../css/footer.css"


function Footer() {
  return (
    
    <div className="footer">
      <div className="container">
        <div className="row">
        <div className="col-md-3 redes">
          
            <a className="link-maps" href="https://www.google.cl/maps/place/Av.+Brasil+7948,+8661078+Renca,+Regi%C3%B3n+Metropolitana/@-33.3980382,-70.7534189,17z/data=!3m1!4b1!4m6!3m5!1s0x9662c16d39b5066d:0xc983b693fca7d344!8m2!3d-33.3980427!4d-70.750844!16s%2Fg%2F11cs9cz7jl?entry=ttu" target="_blank">
              <h5>Ubicación</h5>
              <img src={ubicacionn} className="ubicacion" alt="" />
              <p>Av. Brasil 7948, Renca</p>
            </a>
          
        </div>
        <div className="col-md-3 i-w">
          <a className="link-insta" href="https://www.instagram.com/magy_print_imprimetuidea/" target="_blank">
            <h5 className="tamaño">Síguenos</h5>
            <img src={ig} className="ig" />
            <p>magy_print_imprimetuidea</p>
          </a>
          <a className="link-ws" href="https://wa.me/59100000000" target="_blank">
            <h5>Contactanos</h5>
            <img src={wsp} className="wasap" />
            <p>+569 12345678</p>
          </a>
        </div>

        <div className="col-md-3 pago">
          <h5>Medios de pago</h5>
          <img src={trans} className="mediosdepago" alt="" />
        </div>
        <div className="col-md-3 navegador">
          
            <a className="link-f" href="/">Inicio</a>
            <a className="link-f" href="/catalogo">Catalogo</a>
            <a className="link-f" href="/empresa">Empresa</a>
            <a className="link-f" href="/nosotros">Nosotros</a>
            <a className="link-f" href="/contacto">Contacto</a>
            <img src={logi} className="logofooter" />
          
          
        </div>
        </div>
      </div>
    </div >
  )
}

export default Footer;
