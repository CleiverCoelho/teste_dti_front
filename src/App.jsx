import './App.css'
import MainPage from './pages/mainPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<MainPage></MainPage>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
