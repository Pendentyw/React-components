import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const reducer = (state, action) => {
  if (action.type === 'increment') {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      ...state,
      count: state.count - 1,
    };
  }

  if (action.type === 'change-value') {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }

  if (action.type === 'add-value') {
    return {
      ...state,
      count: state.count + state.valueToAdd,
      valueToAdd: 0,
    };
  }

  return state;
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, { count: initialCount, valueToAdd: 0 });

  const increment = () => {
    dispatch({ type: 'increment' });
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: 'change-value',
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add-value',
    });
  };

  return (
    <Panel className='m-3 flex flex-col'>
      <h1 className='text-lg'>Count is {state.count}</h1>
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
        <label className='mt-2'>Add more!</label>
        <input
          value={state.valueToAdd || ''}
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
