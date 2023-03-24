import './Articles.scss';
import Context from './../../context/App.context';
import { useContext } from 'react';

const Articles = () => {
    const context = useContext(Context);
    const { articlecolor, articleColor } = context;
    const { articlephone, articlePhone } = context;
    const { articlelink, articleLink } = context;

    return (
        <>
            <div>
                {articlecolor && <div className="slider-container" style={{backgroundColor: articleColor}}>
                    <div className='numer'>
                        {articlephone && <p>Mu number is:{articlePhone}</p>}
                        <img height="100px" width="100px"src='5a34f7489f6421.2412588315134206166529.png' alt="phone"/>
                    </div>
                    <div className='linkedin'>
                        {articlelink && <a href ={articleLink} ><img height="100px" width="100px" src="Linkedin-logo-on-transparent-Background-PNG-.png" alt="" /></a>}

                    </div>
                </div>}
            </div>       
        </>
    )
};

export default Articles;