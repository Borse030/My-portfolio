import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     
<BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path='/project' element={<Projects/>} />
<Route path='/contact' element={<Contact/>} />


</Routes>
</BrowserRouter>






    </div>
  );
}

export default App;
