
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/homepage' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
