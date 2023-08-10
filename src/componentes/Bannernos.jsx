import bannernos from "../img/nosotros.png";
import "../css/banhe.css";

function Bannernos() {
    return (
        <div className="container-fluid">
        <div className='banner'>
            <img src={bannernos} alt="" />
        </div>
        </div>
    )
}

export default Bannernos;