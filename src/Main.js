import lover from './images/lover.png';
import flower from './images/flower.png';
import loverFlower from './images/lf.png';
import './App.css';
import { Link } from "react-router-dom"
import Carusel from './Carusel';

function Main() {

    return(<div>
        <div className='cont'>
            <div className="main">
                <div className='lover-flower'>
                    <img className='lover-image' src={lover} alt="lover"/>
                    <img className='lover-image'src={flower} alt="flower"/>
                </div>
                <p className='text'>
                We create for those who appreciate the freshness and elegance of a flower</p>
                <div className='position'>
                <Link className='view' to="/catalog">APL Flowers</Link>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="main">
                <div className="grid">
                    <h2>catalog</h2>
                    <p className="describtion">We have a huge selection of flowers, come and get your desired flowers for your spectacular events. Hire Our Manager to know about the species of the beautiful flowers. </p>
                    <p className="describtion-two">Check out our catalog sections</p>
                    <div className="bouquets dry">
                        <h3>dried flower</h3>
                        <ul>
                            <li className="item">edouard rose or Paneer rose</li>
                            <li className="item">hybiscus flower</li>
                            <li className="item">marigold yellow</li>
                        </ul>
                    </div>
                    <div className="bouquets fresh">
                        <h3>Majority Flowers</h3>
                        <ul>
                            <li className="item">main arali poo</li>
                            <li className="item">main nandiyavattai flower</li>
                            <li className="item">Paneer rose</li>
                        </ul>
                        <h3>Flowers</h3>
                        <ul>
                            <li className="item"> arali flower</li>
                            <li className="item"> nandiyavattai flower</li>
                            <li className="item">Paneer rose</li>
                            <li className="item">marigold orange or yellow</li>
                            <li className="item">shenbaga flower</li>
                        </ul>
                        
                    </div>
                    <div className="bouquets extra">
                        <h3>additionally</h3>
                        <ul>
                            <li className="item">travels</li>
                            <li className="item">agriculture products</li>
                            <li className="item">DELIVERY</li>
                            <li className="item">package</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>    
        <div className='container-two'>
            <div className="fon">
                    </div>
            <div className='main'>
                <div className="grid">
                    <div className='popular'>
                        <h2>Popular</h2>
                        <h2 className="name-two">flowers</h2>
                        <p className="describtion-three">The most favorite compositions of our clients</p>
                    </div>
                    <Carusel />
                </div>
            </div>
        </div>
        <div className='container-three'>
            <div className="fon2">
            </div>
            <div className='main'>
                <div className='grid'>
                    <h2 className='how-to-do-order'>How to make an order</h2>
                    <div className='steps contain'>
                        <div className='step-item'>
                            <h5 className='step'>step 1</h5>
                            <p className='step-description'>Choose what flowers you want to buy</p>
                        </div>
                        <div className='step-item'>
                            <h5 className='step'>step 2</h5>
                            <p className='step-description'>hire our manager through the contact number 9025451148</p>
                        </div>
                        <div className='step-item'>
                            <h5 className='step'>strp 3</h5>
                            <p className='step-description'>Place your desired orders to us with direct phone call</p>
                        </div>
                        <div className='step-item'>
                            <h5 className='step'>step 4</h5>
                            <p className='step-description'>choose your desired place of destination to deliver the products</p>
                        </div>
                        <div className='step-item'>
                            <h5 className='step'>step 5</h5>
                            <p className='step-description'>we can able to deliver to a range of whole TamilNadu and also we will deliver to whole India through Train,bus and flight
                            ..choose your desired delivery option and finalize your order</p>
                        </div>
                    </div>
                    <div>
                        <img className='lf' src={loverFlower} alt="lf"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Main;