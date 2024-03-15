
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Movies from './navbar/Movies';
import Stream from './navbar/Stream';
import Events from './navbar/Events';
import Plays from './navbar/Plays';
import Sports from './navbar/Sports';
import Activities from './navbar/Activities';
import Listshow from './navbar/Listshow';
import Corporate from './navbar/Corporate';
import Offers from './navbar/Offers';
import Giftcards from './navbar/Giftcards';

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
      <Route  path='/movies' element={<Movies />}/>
      <Route  path='/stream' element={<Stream />}/>
      <Route  path='/events' element={<Events />}/>
      <Route  path='/plays' element={<Plays />}/>
      <Route  path='/sports' element={<Sports />}/>
      <Route  path='/activities' element={<Activities />}/>
      <Route  path='/listshow' element={<Listshow />}/>
      <Route  path='/corporates' element={<Corporate />}/>
      <Route  path='/offers' element={<Offers />}/>
      <Route  path='/gaftcards' element={<Giftcards />}/>
    </Routes>
    </>
  );
}

export default App;
