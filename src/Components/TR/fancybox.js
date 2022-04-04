import React, {Component} from 'react';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import pic1jr from './imgs/ShowroomJr.jpeg'
import pic1 from './imgs/Showroom.jpeg'
import pic2 from './imgs/Yikama.jpeg'
import pic2jr from './imgs/YikamaJr.jpeg'
import pic3 from './imgs/Punta3.jpeg'
import pic3jr from './imgs/Punta3Jr.jpeg'
import pic4 from './imgs/Punta2.jpeg'
import pic4jr from './imgs/Punta2Jr.jpeg'
import pic5 from './imgs/Orme.jpeg'
import pic5jr from './imgs/OrmeJr.jpeg'
import pic6 from './imgs/Orme3.jpeg'
import pic6jr from './imgs/Orme3Jr.jpeg'



class Test extends Component {
  render() {
      
    return (
      <div className="App "  >
        <div className=" fancybox row col-10" style={{"margin":"auto"}}>
        <div className="col-2">
        <ReactFancyBox thumbnail={pic6jr} caption="Örme parkurumuz"  image={pic6}/>
        </div>
        <div className="col-2 ">
        <ReactFancyBox thumbnail={pic5jr} caption="Örme parkurumuz"  image={pic5}/>
        </div> 
        <div className="col-2">
        <ReactFancyBox thumbnail={pic3jr} caption="Punta parkurumuz"  image={pic3}/>
        </div>
        <div className="col-2">
        <ReactFancyBox thumbnail={pic4jr} caption="Punta parkurumuz"  image={pic4}/>
        </div>
          <div className="col-2">
        <ReactFancyBox thumbnail={pic1jr} caption="Showroom"  image={pic1}/>
          </div>
        
        </div>
       
      </div>
    );
  }
}

export default Test;