import './App.css';
import Home from './Home.js'
import Header from './Header.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
<Router>
  <Routes>
    <Route path='/checkout' element={<>
      <Header/>
      <h1>something something</h1>
    </>} />

    <Route path="/" element={<>
      <Header/>
      <Home/>
    </>} />
  </Routes>
</Router>
  );
}

export default App;
