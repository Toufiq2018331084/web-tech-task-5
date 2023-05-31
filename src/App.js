import './App.css';
import Home from './Home.js'
import Header from './Header.js';
import Checkout from "./Checkout.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
<Router>
  <Header/>
  <Routes>
    <Route path='/checkout' element={<>

      <Checkout/>
    </>} />

    <Route path="/" element={<>
      <Home/>
    </>} />
  </Routes>
</Router>
  );
}

export default App;
