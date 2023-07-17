import { GoChevronLeft, GoChevronDown } from 'react-icons/go';
import { useState, useEffect, useRef } from 'react';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divElement = useRef();
  //obiekt current i tam jest dopiero ref do diva

  useEffect(() => {
    const handler = (event) => {
      if (!divElement.current) {
        return;
      }
      if (!divElement.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renederedOptions = options.map((option) => {
    return (
      <div
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
        onClick={() => handleOptionClick(option)}
        key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <div
      ref={divElement}
      className='w-48 relative'>
      <Panel
        className='flex justify-between items-center cursor-pointer v  '
        onClick={handleClick}>
        {value?.label || 'Select...'}
        {isOpen ? <GoChevronLeft /> : <GoChevronDown />}
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renederedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
