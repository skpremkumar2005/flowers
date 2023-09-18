// import { dataTwo } from "./data";

function Buttons({anyWord}) {
    return(
        <div>
            <div className="container-catalog-title">
            <div className="main">
                <div className="catalog-title">
                    <h2 className="name-three-title">flower </h2>
                    <h2 className="name-three">list</h2>
                    <p className="catalog-text">
                    Our store has the largest selection of flowers for any occasion:</p>
                    <div className="catalog-tags">
                        {/* <button className="btn-tag" onClick= {()=>setBouquet(dataTwo)}>Всё (32)</button>  */}
                        <button className="btn-tag" onClick= {()=>anyWord('popular')}>popular(11)</button>
                        <button className="btn-tag" onClick= {()=>anyWord('roses')}>roses(4)</button>
                        <button className="btn-tag" onClick= {()=>anyWord('dried')}>dried (2)</button>
                        <button className="btn-tag" onClick= {()=>anyWord('dried')}>mix (9)</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Buttons;