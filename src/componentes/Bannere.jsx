import bannere from "../img/insti.png";
import "../css/banhe.css";

function Bannere() {
    return (
        <div className="container-fluid">
        <div className='banner'>
            <img src={bannere} alt="" />
        </div>
        </div>
    )
}

export default Bannere;