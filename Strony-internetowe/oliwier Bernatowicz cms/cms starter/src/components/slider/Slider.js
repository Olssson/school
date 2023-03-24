import './Slider.scss';
import Context from './../../context/App.context';
import { useContext } from 'react';

const Slider = () => {
    const context = useContext(Context);
    const { sliderState, sliderText } = context;
    const { sliderImage, sliderimage } = context;
    const { sliderColor, slidercolor } = context;
    const { sliderEmail, slideremail } = context;

    return (
        <>
        {sliderColor && <div className='slider-container' style={{backgroundColor: slidercolor}}>
        <div className='slider-container'>
            <div className='slider-container__text'>
                <p>Your nickname:</p>
                {sliderState && 
                    <p className='nickname'>{sliderText ? sliderText : ''}</p>
                }
                {sliderImage && <div className='profile-picture'>
                    <img src={sliderimage} height="100px" width="100px" alt='Zdjęcie profilowe' />
                </div>}
                <p>Twój e-mail</p>
                {sliderEmail && <p className='email'>{slideremail}</p>}
            </div>
        </div>
        </div>}
        </>
    )
};

export default Slider;