import image from "./images/logo.png";
import insta from "./images/insta.png";
import whatsapp from "./images/whatsapp.png";
import phone from "./images/phone.png";
import { Link } from "react-router-dom";
import "./App.css"
function Footer() {
    return(<footer>
        <div className='first'>
            {/* <img className='logo-footer' style={{width:200,height:200}} src={image} alt="logo"/>
           
            <div className='requisites'>  <h4> Delivery Available to All over TamilNadu and also whole india through transport facility.. </h4>
           <div className="c"><div className="call"> callnow</div><div className="cal"> give</div></div> </div>
        </div>
     
        <div className='columnadd'>
            <div>
                <p className='address'>shop Address</p>
                <p className='address-text'>Kurangupuliyamaram bus stop in salem</p>
            </div>
            <div>
                <p className='address'>Working hours</p>
                <p className='address-text'>8 AM TO 8 PM</p>
            </div>
            <div>
                <p className='address'>Mobile number</p>
                <p className='address-text'>9025451148</p>

            </div>
            <div>

                <p className='address'>whatsapp number</p>
                <p className='address-text'>9025451148</p>
                
            </div>
            <div>
                <img className='social-image' src={insta} alt="insta"/>
                <img className='social-image' src={whatsapp} alt="whatsapp"/>
                <img className='social-image' src={phone} alt="phone"/>
            </div> */}
            <div className="left">
                <div><img className='logo-footer' style={{width:200,height:200}} src={image} alt="logo"/></div>
                <div > <div className="left-con" > <h4> Delivery Available to All over TamilNadu and also whole india through transport facility.. </h4>
           <div className="c"><div className="call"> callnow</div><div className="cal"> give</div></div> </div>
        </div>
            </div>
            <div className="right">
                
            <div className="right-fon">
                <p className='address'>shop Address</p>
                <p className='address-text'>Kurangupuliyamaram bus stop in salem</p>
            
          
                <p className='address'>Working hours</p>
                <p className='address-text'>8 AM TO 8 PM</p>
            
           
                <p className='address'>Mobile number</p>
                <p className='address-text'>9025451148</p>

            
                <p className='address'>whatsapp number</p>
                <p className='address-text'>9025451148</p>
                
           
                <img className='social-image' src={insta} alt="insta"/>
                <img className='social-image' src={whatsapp} alt="whatsapp"/>
                <img className='social-image' src={phone} alt="phone"/></div>
            </div>

        </div>
    </footer>
    )
}

export default Footer;