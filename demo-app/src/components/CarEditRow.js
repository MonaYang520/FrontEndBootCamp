import { useState } from 'react';

export const CarEditRow = ({ car, onSaveCar, onCancelCar: cancelCar }) => {
  const [carForm, setCarForm] = useState({ ...car });

  const change = e => {
    setCarForm({
      ...carForm,
      [e.target.name]:
        e.target.getAttribute('data-type') === 'number'
          ? parseInt(e.target.value, 10)
          : e.target.value,
    });
  };

  const saveCar = () => {

    onSaveCar({
      ...carForm,
      id: car.id,
    });

  };

  return (
    <tr>
      <td>{car.id}</td>
      <td>
        <input type="text" name="make" value={carForm.make} onChange={change} />
      </td>
      <td>
        <input
          type="text"
          name="model"
          value={carForm.model}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="text"
          data-type="number"
          name="year"
          value={carForm.year}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="text"
          name="color"
          value={carForm.color}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="text"
          data-type="number"
          name="price"
          value={carForm.price}
          onChange={change}
        />
      </td>
      <td>
        <button type="button" onClick={saveCar}>
          Save
        </button>
        <button type="button" onClick={cancelCar}>
          Cancel
        </button>
      </td>
    </tr>
  );
};
