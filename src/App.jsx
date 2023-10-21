import './App.css'
import MainPage from './pages/main'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewPetshop from './pages/newPetshop';
import NewPetDay from './pages/newPetDay';
import Footer from './pages/components/footer';
import React, { useEffect } from 'react';
import BestPetshopContext from './contexts/bestPetshopContext';

function App() {
  const [bestPetshop, setBestPetshop] = React.useState({});
  
  useEffect(() => {}, [bestPetshop]);

  return (
    <BestPetshopContext.Provider value={{bestPetshop, setBestPetshop}}>
      <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<MainPage></MainPage>}></Route>
            <Route path={`/newpetday`} element={<NewPetDay setBestPetshop={setBestPetshop}></NewPetDay>}></Route>
            <Route path={`/newpetshop`} element={<NewPetshop></NewPetshop>}></Route>
          </Routes>
          <Footer></Footer>
      </BrowserRouter>
    </BestPetshopContext.Provider>  )
}

export default App
