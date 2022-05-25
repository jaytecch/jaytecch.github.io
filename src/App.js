import './App.css';
import { Banner } from './Components/Banner';
import {Header} from "./Components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Products } from './Components/Products';
import { Footer } from './Components/Footer';
import { Steps } from './Components/Steps';

function App() {
  return (
    <div className="App container-fluid p-0">
     
      <div className='hb-wrapper d-md-flex flex-column'>
      <Header/>
      <Banner />
      </div>
      <Products />
      <Steps />
      <Footer />
    </div>
  );
}

export default App;
