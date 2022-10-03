import Products from '../products/Products';
import './filter.css';

const Filter = (props) => {

  return (
    <div className='filter'>
    <select onChange={props.sort}>
        <option onClick={() => props.canabis(Products)}>Canabis</option>
        <option onClick={() => props.rifle(Products)}>rifle</option>
        <option onClick={() => props.sort(Products)}>Sort</option>
    </select>
    </div>
  );
}

export default Filter;