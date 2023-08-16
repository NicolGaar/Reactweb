import { Outlet } from "react-router-dom"
import logo from "../imgcont/logo.png"
const Layout = () =>{
    return(
        <div>
        <nav className="navbar navbar-expand-lg bg-body-white">
    <div className="container-fluid">
        <div className='logo'>
            <img src={logo} alt=""/>
        </div>
            <div className='navbar'>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <div className="nav-item">
                    <link to="./inicio">INICIO</link>
                    </div>
                    <div className="nav-item">
                    <link to="./empresa">EMPRESAS</link>
                    </div>
                    <div className="nav-item">
                    <link to="./nosotros">NOSOTROS</link>
                    </div>
                    <div className="nav-item">
                    <link to="./contacto">CONTACTO</link>
                    </div>
                    <div className="nav-item">
                    <link to="./contacto">CONTACTO</link>
                    </div>
                    </ul>
                <form className="d-flex" role="search">
                    <input className="form me-2" type="search" placeholder="Buscar..." aria-label="Search"/>
                    <button className="btn btn-outdivne-success" type="submit"><i className="fa-solid fa-magnifying-glass" style={{color: '#3fa09b'}}></i></button>  
                </form>
                </div>
            </div>
    </div>
  </nav>
  <Outlet />
  </div>
    )
}
export default Layout;