import './App.css'
import MainPage from './pages/main'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewPetshop from './pages/newPetshop';
import NewPetDay from './pages/newPetDay';
import Footer from './pages/components/footer';
import React from 'react';

function App() {
  const [bestPetshop, setBestPetshop] = React.useState({});

  return (
    <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<MainPage></MainPage>}></Route>
          <Route path={`/newpetday`} element={<NewPetDay></NewPetDay>}></Route>
          <Route path={`/newpetshop`} element={<NewPetshop setBestPetshop={setBestPetshop}></NewPetshop>}></Route>
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
