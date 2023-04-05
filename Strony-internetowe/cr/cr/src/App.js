import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Website from './views/website';
import Admin from './views/admin';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Website />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='*' element={<h2>404</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
