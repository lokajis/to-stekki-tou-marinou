import './App.css';
import Navbar from "./components/navbar"
import Lesant from './components/lezant';
import MidleBackroundImage from "./components/midleBackrounfImage";
import Carusel from "./components/carusel" ;
import Menu from './components/menu';
import Revews from './components/Revews';
import {GoogleMaps} from './components/googleMaps';

function App() {
  return (
    <div className="">

<Navbar/>
<MidleBackroundImage/>
 <Lesant/>
<Carusel/> 
<Menu/>
<Revews/>
{/* <GoogleMaps/> */}
    </div>
  );
}

export default App;
