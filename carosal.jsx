import './App.css';
import Button from 'react-bootstrap/Button';
import Slider from './slider';
import slides from './jsondata.json';

function carosal() {
  return (
    <div className='carosal'>
    <Slider slides={slides}/></div>
  )
}

export default carosal;