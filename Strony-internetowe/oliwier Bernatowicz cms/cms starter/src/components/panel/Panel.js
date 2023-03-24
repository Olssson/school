import './Panel.scss';
import Context from './../../context/App.context';
import { useContext } from 'react';

const Panel = () => {
    const context = useContext(Context);
    const { sliderState,
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
        
        handlearticlecolor,
        handlesetarticlecolor,
        articleColor,
        setarticleColor,

        handlearticlephone,
        handlesetarticlephone,
        articlePhone,
        setarticlePhone,

        handlearticleLink,
        handlesetarticleLink,
        articleLink,
        setarticleLink,

        handefootercolor,
        handlesetfootercolor,
        footerColor,
        setfooterColor,
     } = context;
    
    const Handefootercolor = (e) => {
        handlesetfootercolor(!handefootercolor);
    }
    const Handlfootercolor = (e) => {
        const fcolor = e.target.value;
        setfooterColor(fcolor);
    }

    const handlearticlelink= () => {
        handlesetarticleLink(!handlearticleLink);
    }
    const setArticleLinkHandler = (e) => {
        const Link = e.target.value;
        setarticleLink(Link);
    }
    const handleSliderState = () => {
        handlesetarticlephone(!handlearticlephone);
    }
    const handleSliderText = (e) => {
        const phon = e.target.value;
        setarticlePhone(phon);
    }

    const setArticleColorHandler = () => {
        handlesetarticlecolor(!handlearticlecolor);
    }
    const setArticlecolorHandler = (e) => {
        const Acolor = e.target.value;
        console.log(Acolor);
        setarticleColor(Acolor);
    }
    const setSliderEmailHandler = () => {
        setSliderEmail(!sliderEmail);
    }
    const setslidereemailHandler = (e) => {
        const email = e.target.value;
        setslideremail(email);
    }
    const setSliderColorHandler = () => {
        setSliderColor(!sliderColor);
    }
    const setSlidercolorHandler = (e) => {
        const color = e.target.value;
        console.log(color);
        setslidercolor(color);
    }
    const setSliderImageHandler = () => {
        setSliderImage(!sliderImage);
    }
    const setsliderimageHanlder = (e) => {
        const image = e.target.value;
        setsliderimage(image);
    }
    const setSliderStateHandler = () => {
        setSliderState(!sliderState);
    };
    const setSliderTextHandler = (e) => {
        const text = e.target.value;
        setSliderText(text);
    };


    return (
        <div className='panel-container'>
            <h2>Control Panel</h2>
            <ul>
                <p>Slider</p>
                <li>
                    
                    <input type='checkbox'
                           defaultChecked={sliderState}
                           onChange={setSliderStateHandler} />
                </li>
                <li>
                    <p>Podaj swój nick</p>
                    <input type='text'
                           defaultValue={sliderText}
                           onChange={(e) => setSliderTextHandler(e)}
                           placeholder='Type text...'/>
                </li>
                <li>
                    <input type='checkbox'
                        defaultChecked={sliderImage}
                        onChange={setSliderImageHandler} />
                </li>
                <li>
                    <p>podaj link do zdjęcia profilowego</p>
                    <input type='text'
                        defaultValue={sliderimage}
                        onChange={(e) => setsliderimageHanlder(e)}
                        placeholder='Type image url...' />
                </li>
                <li>
                    <input type='checkbox'
                        defaultChecked={sliderColor}
                        onChange={setSliderColorHandler} />
                </li>
                <li>
                    <p>zmień tło</p>
                    <input type='color'
                        defaultValue={slidercolor} 
                        onChange={(e) => setSlidercolorHandler(e)}/>
                </li>
                <li>
                    <input type='checkbox'
                        defaultChecked={sliderEmail}
                        onChange={setSliderEmailHandler} />
                </li>
                <li>
                    <p>podaj swój email</p>
                    <input type='email'
                        defaultValue={slideremail}
                        onChange={(e) => setslidereemailHandler(e)}
                        placeholder='Type email...' />
                </li> 
                <hr></hr>
                <p>Article</p>
                <li>
                    <input type='checkbox'
                        defaultChecked={articleColor}
                        onChange={setArticleColorHandler} />
                </li>
                <li>
                    <p>zmień kolor artykułu</p>
                    <input type='color'
                        defaultValue={handlearticlecolor}
                        onChange={(e) => setArticlecolorHandler(e)} />
                        
                </li>
                <li>
                    <input type='checkbox'
                        defaultChecked={articlePhone}
                        onChange={handleSliderState} />
                </li>
                <li>
                    <p>podaj swój numer telefonu</p>
                    <input type='number'
                        defaultValue={handlearticlephone}
                        onChange={(e) => handleSliderText(e)}
                        placeholder='Type phone...' />
                </li>
                <li>
                    <input type='checkbox'
                        defaultChecked={articleLink}
                        onChange={handlearticlelink} />
                </li>
                <li>
                    <p>podaj link do swojego linkedinu</p>
                    <input type='text'
                        defaultValue={handlearticleLink}
                        onChange={(e) => setArticleLinkHandler(e)}
                        placeholder='Type link...' />
                </li>
                <hr></hr>
                <p>Footer</p>
                <li>
                    <input type='checkbox'
                        defaultChecked={footerColor}
                        onChange={Handefootercolor} />
                </li>
                <li>
                    <p>zmień kolor stopki</p>
                    <input type='color'
                        defaultValue={handefootercolor}
                        onChange={(e) => Handlfootercolor(e)} />
                </li>
            </ul>
        </div>
    )
}
export default Panel;