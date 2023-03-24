import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Website from './views/website';
import Admin from './views/admin';
import './App.scss';
import Context from './context/App.context';

const App = () => {
  const { Provider } = Context;
  const [sliderState, setSliderState] = useState(true);
  const [sliderImage, setSliderImage] = useState(true);
  const [sliderColor, setSliderColor] = useState(true);
  const [sliderEmail, setSliderEmail] = useState(true);
  const [articleColor, setarticleColor] = useState(true);
  const [articlePhone, setarticlePhone] = useState(false);
  const [articleLink, setarticleLink] = useState(false);
  const [footerColor, setfooterColor ] = useState(false);

  const [sliderText, setSliderText] = useState('');
  const [sliderimage, setsliderimage] = useState('https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png')
  const [slidercolor, setslidercolor] = useState('')
  const [slideremail, setslideremail] = useState('')
  const [articlecolor, handlesetarticlecolor] = useState('orange')
  const [articlephone, handlesetarticlephone] = useState('')
  const [articlelink, handlesetarticleLink] = useState('')
  const [footercolor, handlesetfootercolor ] = useState('')
  
  return (
    <div className='App'>
      <Provider value={{ sliderState,
                         setSliderState,
                         sliderText,
                         setSliderText,
                         sliderImage,
                         setSliderImage,
                         sliderimage,
                         setsliderimage,
                         sliderColor,
                         setSliderColor,
                         slidercolor,
                         setslidercolor,
                         sliderEmail,
                         setSliderEmail,
                         slideremail,
                         setslideremail,
                         articlecolor,
                         handlesetarticlecolor,
                         articleColor,
                         setarticleColor,   
                         articlephone,
                         handlesetarticlephone,
                         articlePhone,
                         setarticlePhone,
                         articlelink,
                         handlesetarticleLink,
                         articleLink,
                         setarticleLink,
                         footerColor, 
                         setfooterColor,
                         footercolor,
                         handlesetfootercolor
                         }}>
        <BrowserRouter>
          <Routes>
              <Route path='*' element={<Website />} />
              <Route path='/admin' element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
