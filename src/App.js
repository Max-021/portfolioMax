import React from 'react';
import {Routes, Route,} from 'react-router-dom';
import './sass/App.scss';

import Auxiliary from './hoc/Auxiliary';

import Layout from './pages/Layout';
import Landpage from './pages/Landpage';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

const App = () => {
  
  return (
    <Auxiliary>
      <Routes>
        <Route path='/' element={<Landpage/>}/>
        <Route element={<Layout/>}>
          <Route path='/about' element={<About/>}/>
          <Route path='/work' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>

      {/* <Layout>
        {routes}
      </Layout> */}
    </Auxiliary>
  );
}

export default App;
