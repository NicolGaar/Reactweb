import card1 from "../imgemp/cards/Card_1.png"
import card2 from "../imgemp/cards/Card_2.png"
import card3 from "../imgemp/cards/Card_3.png"
import card4 from "../imgemp/cards/Card_4.png"
import card5 from "../imgemp/cards/Card_5.png"
import card6 from "../imgemp/cards/Card_6.png"
import card7 from "../imgemp/cards/Card_7.png"
import card8 from "../imgemp/cards/Card_8.png"
import img1 from "../imgemp/img/img_1_polera.png"
import img2 from "../imgemp/img/img_2_poleron.png"
import img3 from "../imgemp/img/img_3_agenda.png"
import "../css/empresa.css"

function Empresa() {
  return (
    <div id="empresa">
      <div id="info_empresas">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Corporis, dignissimos animi. Quod nisi, suscipit vero quis<br />
          tempora sunt culpa odit tenetur iusto eos soluta, nostrum ullam, <br />
          laudantium non reprehenderit temporibus?<br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Corporis, dignissimos animi. Quod nisi, suscipit vero quis<br />
          tempora sunt culpa odit tenetur iusto eos soluta, nostrum ullam, <br />
          laudantium non reprehenderit temporibus?<br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Corporis, dignissimos animi. Quod nisi, suscipit vero quis<br />
          tempora sunt culpa odit tenetur iusto eos soluta, nostrum ullam, <br />
          laudantium non reprehenderit temporibus?<br />
        </p>
      </div>

      <h2 id="titulo-productos"><b>PRODUCTOS EMPRESAS</b></h2>
      <div id="productos">

        <div id="container">
          <div id="cards">
            <figure>
              <img src={card1} />
            </figure>
            <div id="contenido">
              <h2>Llavero</h2>
              <h5>Corporativo</h5>
              <a href="#">Cotizar</a>
            </div>
          </div>
          <div id="cards">
            <figure>
              <img src={card2} />
            </figure>
            <div id="contenido">
              <h2>Delantal Chef</h2>
              <h5>Cocina</h5>
              <a href="#">Cotizar</a>
            </div>
          </div>
          <div id="cards">
            <figure>
              <img src={card3} />
            </figure>
            <div id="contenido">
              <h2>Botella de agua</h2>
              <h5>Liquidos</h5>
              <a href="#">Cotizar</a>
            </div>
          </div>
          <div id="cards">
            <figure>
              <img src={card4} />
            </figure>
            <div id="contenido">
              <h2>Llavero </h2>
              <h5>Corporativo</h5>
              <a href="#">Cotizar</a>
            </div>
          </div>
          <div id="cards">
            <figure>
              <img src={card5} />
            </figure>
            <div id="contenido">
              <h2>Boligrafo clasico</h2>
              <h5>Corporativo</h5>
              <a href="#">Cotizar</a>
            </div>
          </div>
          <div id="cards">
            <figure>
              <img src={card6} />
            </figure>
            <div id="contenido">
              <h2>Boligrafo moderno</h2>
              <h5>Corporativo</h5>
              <a href="#">Cotizar</a>
            </div>
          </div>
          <div id="cards">
            <figure>
              <img src={card7} />
            </figure>
            <div id="contenido">
              <h2>Pulsera de goma</h2>
              <h5>Corporativo</h5>
              <a href="#">Cotizar</a>
            </div>
          </div>
          <div id="cards">
            <figure>
              <img src={card8} />
            </figure>
            <div id="contenido">
              <h2>Tazon de metal</h2>
              <h5>Corporativo</h5>
              <a href="#">Cotizar</a>
            </div>
          </div>
        </div>
      </div>

      <div id="formulario">
        <div id="form">
          <div className="contact_form">
            <div className="formulario">
              <form action="" method="post">
                <p>
                  <label for="nombre"
                  >Nombre
                    <span>*</span>
                  </label>
                  <input type="text" name="introducir_nombre" id="nombre" required placeholder="Escribe tu nombre" />
                </p>

                <p>
                  <label for="apellido"
                  >Apellido
                    <span>*</span>
                  </label>
                  <input type="text" name="introducir_nombre" id="nombre" required placeholder="Escribe tu apellido" />
                </p>

                <p>
                  <label for="email"
                  >Email
                    <span>*</span>
                  </label>
                  <input type="email" name="introducir_email" id="email" required placeholder="Escribe tu Email" />
                </p>

                <p>
                  <label for="telefono">Teléfono </label>
                  <input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono" />
                </p>

                <p>
                  <p>Servicios</p>
                  <br />
                  <label className="checkbox_productos"
                  >Lapices
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox_productos"
                  >Termos
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox_productos"
                  >Destapadores
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox_productos"
                  >Llaveros
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </p>

                <p>
                  <label for="mensaje"
                  >Mensaje
                    <span>*</span>
                  </label>
                  <textarea
                    name="introducir_mensaje"
                    id="mensaje"
                    required
                    placeholder="Deja aquí tu comentario..."
                  ></textarea>
                </p>

                <button type="submit" name="enviar_formulario" id="enviar"><p>Mas Info</p></button>

                <p className="aviso"><span> * </span>los campos son obligatorios.</p>
              </form>
            </div>
          </div>
        </div>

        <div id="img-muestra">
          <div id="img_derecha">
            <figure>
              <img src={img1} />
            </figure>
          </div>
          <div id="img_derecha">
            <figure>
              <img src={img2} />
            </figure>
          </div>
          <div id="img_derecha">
            <figure>
              <img src={img3} />
            </figure>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Empresa;