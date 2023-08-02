import { useState } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setValueToAdd(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + valueToAdd);
    setValueToAdd(0);
  };

  return (
    <Panel className='m-3 flex flex-col'>
      <h1 className='text-lg'>Count is {count}</h1>
      <div className='flex flex-row'>
        <Button
          onClick={increment}
          outline>
          Increment
        </Button>
        <Button
          onClick={decrement}
          outline>
          Decrement
        </Button>
      </div>
      <form
        onSubmit={handleSubmit}
        className=' flex flex-col items-start'>
        <label className='mt-2'>Add a lot!</label>
        <input
          value={valueToAdd || ''}
          onChange={handleChange}
          className=' p-1 border bg-gray-50 border-gray-200 mb-2'
          type='number'
        />
        <Button outline>Add</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
