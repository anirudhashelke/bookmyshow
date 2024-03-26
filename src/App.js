
import { Route, Routes } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-accessible-accordion/dist/fancy-example.css';
import "react-multi-carousel/lib/styles.css";
import './App.css';
import Header from './component/Header';
import Plays from './navbar/Plays';
import Corporate from './navbar/Corporate';
import Offers from './navbar/Offers';
import Giftcards from './navbar/Giftcards';
import Footer from './footer/Footer';
import Movies from './navbar/movies/Movies';
import Stream from './navbar/streams/Stream';
import Events from './navbar/Event/Events';
import Activities from './navbar/Activities/Activities';
import Sports from './navbar/Sports/Sports';
import Listshow from './navbar/ListyouShow/Listshow';


function App() {
  // const routers=[
  //   {
  //     path:"",
  //     element:""
  //   }
  // ]
  return (
    <>
      <Header />

      <Routes >
        <Route path='/movies' element={<Movies />} />
        <Route path='/stream' element={<Stream />} />
        <Route path='/events' element={<Events />} />
        <Route path='/plays' element={<Plays />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/listshow' element={<Listshow />} />
        <Route path='/corporates' element={<Corporate />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/gaftcards' element={<Giftcards />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
