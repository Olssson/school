import './Header.scss';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const isAdmin = (props.title).toUpperCase() === 'ADMIN';

    return (
        <div className='header-container'>
            <div className='container header'>
                <h1>{props.title}</h1>
                {isAdmin
                ? <Link className='btn'
                       to='/'>Powrót</Link>
                : <Link className='btn btn--admin'
                      to='/admin'>Admin panel</Link>}
            </div>
        </div>
    )
}

export default Header;