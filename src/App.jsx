import './App.css'
import MainPage from './pages/main'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewPetshop from './pages/newPetshop';
import NewPetDay from './pages/newPetDay';
import Footer from './pages/components/footer';
import usePetshop from './hooks/api/usePetshops';

function App() {
  const { data } = usePetshop();

  return (
    <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<MainPage data={data}></MainPage>}></Route>
          <Route path={`/newpetday`} element={<NewPetDay></NewPetDay>}></Route>
          <Route path={`/newpetshop`} element={<NewPetshop></NewPetshop>}></Route>
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
