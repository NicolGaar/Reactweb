const images = require.context('../Imgcatalogo', true);
import '../css/cards.css'

function Cards () {
    return (  
        <div className='category-fluid'>
            <div className="nested-cards">
                <div className="card-productos-cat">
                    <img src={images(`./proyecto-22.png`)} className="card-img-top-cat" alt="..." />
                    <div className="card-body-cat">
                        <h3 className="card-title-cat">Tazon</h3>
                        <p className="card-text-cat">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, officia.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Cards;