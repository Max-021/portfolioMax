import React from 'react';
import {Routes, Route,} from 'react-router-dom';
import './sass/App.scss';

import Auxiliary from './hoc/Auxiliary';

import Layout from './pages/Layout';
import Landpage from './pages/Landpage';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Game from './pages/Game';


// aca acomodar para que la landpage no tenga navbar y tenga una vista distinta

const App = () => {
  
  return (
    <Auxiliary>
      <Routes>
        <Route path='/' element={<Landpage/>}/>
        <Route element={<Layout/>}>
          <Route path='/about' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
        <Route path='/game' element={<Game/>}/>
      </Routes>

      {/* <Layout>
        {routes}
      </Layout> */}
    </Auxiliary>
  );
}

export default App;
