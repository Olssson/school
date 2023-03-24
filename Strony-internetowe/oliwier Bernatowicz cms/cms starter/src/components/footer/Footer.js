import './Footer.scss';
import Context from './../../context/App.context';
import { useContext } from 'react';

const Footer = () => {
    const context = useContext(Context);
    const {footerColor, footercolor } = context
    console.log(footerColor)
    return (
        <>
            {footercolor && <div className='slider-container' style={{backgroundColor: footerColor}}></div>}
        </>
    )
};

export default Footer;