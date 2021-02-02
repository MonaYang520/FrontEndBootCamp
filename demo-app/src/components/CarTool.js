import { useState } from 'react';

import { toString } from '../utils';
import { CarTable } from './CarTable';

export const CarTool = (props) => {

  const [carForm, setCarForm] = useState({
    make: '', model: '', year: 1900, color: '', price: 0
  });

  const change = (e) => {
    setCarForm({
      ...carForm,
      [e.target.name]: e.target.type === 'number'
        ? parseInt(e.target.value, 10) : e.target.value,
    });

  };

  console.log(carForm);

  return (
    <>
      <header>
        <h1>Car Tool</h1>
      </header>
      <CarTable cars={props.cars} />
      <form>
        <div>
          <label htmlFor="make-input">Make</label>
          <input type="text" id="make-input" name="make"
            value={carForm.make} onChange={change} />
        </div>
        <div>
          <label htmlFor="model-input">Model</label>
          <input type="text" id="model-input" name="model"
            value={carForm.model} onChange={change} />
        </div>
        <div>
          <label htmlFor="year-input">Year</label>
          <input type="number" id="year-input" name="year"
            value={toString(carForm.year)} onChange={change} />
        </div>
        <div>
          <label htmlFor="color-input">Color</label>
          <input type="text" id="color-input" name="color"
            value={carForm.color} onChange={change} />
        </div>
        <div>
          <label htmlFor="price-input">Price</label>
          <input type="number" id="price-input" name="price"
            value={toString(carForm.price)} onChange={change} />
        </div>
      </form>
    </>
  );

};