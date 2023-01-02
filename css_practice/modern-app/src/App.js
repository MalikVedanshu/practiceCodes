import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './Components/home.js';
import Bootstrap1 from './Components/bootstrap1.js';
import Bootstrap2 from './Components/bootstrap2.js';
import Bootstrap3 from './Components/bootstrap3.js';
import Feature from './Components/feature.js';


function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home />}></Route>
        <Route path='/bootstrap1' element={<Bootstrap1 />}></Route>
        <Route path='/bootstrap2' element={<Bootstrap2 />}></Route>
        <Route path='/bootstrap3' element={<Bootstrap3 />}></Route>
        <Route path='/feature' element={<Feature />}> </Route>
      </Routes>
      </>
  );
}

export default App;
