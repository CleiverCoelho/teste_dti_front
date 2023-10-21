import './App.css'
import GraphPage from './pages/graphPage';
import MainPage from './pages/mainPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<MainPage></MainPage>}></Route>
          <Route path={`/newpetday`} element={<MainPage></MainPage>}></Route>
          <Route path={`/newpetshop`} element={<MainPage></MainPage>}></Route>

        </Routes>
    </BrowserRouter>
  )
}

export default App
