import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Mailbox} from './pages';
import axios from 'axios';

const App = () => {
  axios.defaults.withCredentials = true
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path='*' element={<Login />} />
            <Route path='mailbox' element={<Mailbox />} />
        </Routes>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
      </BrowserRouter>
    </div>
  );
}

export default App;
