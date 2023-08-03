import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const ADD_CUSTOM_VALUE = 'add-value';
const SET_VALUE_TO_ADD = 'set-value-to-add';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_CUSTOM_VALUE:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };

    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, { count: initialCount, valueToAdd: 0 });

  const increment = () => {
    dispatch({ type: INCREMENT_COUNT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_CUSTOM_VALUE,
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
