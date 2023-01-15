import React from 'react';
import {Routes, Route,} from 'react-router-dom';
import './sass/App.scss';

import Auxiliary from './hoc/Auxiliary';

import Layout from './pages/Layout';
import Landpage from './pages/Landpage';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';


// aca acomodar para que la landpage no tenga navbar y tenga una vista distinta

const App = () => {
  
  const routes = (
    <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/' element={<Landpage/>}/>
    </Routes>
  );

  return (
    <Auxiliary>
      <Layout>
        {routes}
      </Layout>
    </Auxiliary>
  );
}

export default App;
