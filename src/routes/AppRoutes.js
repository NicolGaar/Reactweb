import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Iniciopage from "../page/Inicio";
import Nosotrospage from "../page/Nosotros";
import Empresapage from "../page/Empresa";
import Contactopage from "../page/Contacto";
import Catalogopage from "../page/Catalogo";

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Iniciopage />}></Route>
            <Route path='/catalogo' element={<Catalogopage />}/>
            <Route path='/nosotros' element={<Nosotrospage />}></Route>
            <Route path='/empresa' element={<Empresapage />}></Route>
            <Route path='/contacto' element={<Contactopage />}></Route>
            
            
                        

            
        </Routes>
    </Router>
  )
}

export default AppRoutes;


