import logo from './logo.svg';
import './App.css';
import Login from './components/login';
// tao router
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeComponent from './components/home';

function App() {
  const a =1;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<HomeComponent value={a}/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
