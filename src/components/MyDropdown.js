import { useState } from 'react';
function Dropdown({ options }) {
  const [dropdownData, setDropdownData] = useState({ label: 'Select...', value: 'gray' });
  const [isExpanded, setIsExpanded] = useState(false);

  const generatedDropdownList = options.map((option) => {
    const backgroundStyle = { color: option.value };
    return (
      <div
        className='border w-40 text-center p-1 hover:bg-gray-200'
        style={backgroundStyle}
        key={option.value}
        onClick={() => handleActiveLabel(option)}>
        {option.label}
      </div>
    );
  });

  const handleActiveLabel = (activeOption) => {
    setDropdownData(activeOption);
    setIsExpanded(false);
  };

  const handleIsExpanded = () => {
    if (isExpanded) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
      setDropdownData({ label: 'Select...', value: 'gray' });
    }
  };

  const dropdownStyle = { backgroundColor: dropdownData.value, color: 'white' };

  return (
    <div className='bg-gray-200 h-screen'>
      <div className='rounded relative drop-shadow-lg cursor-pointer'>
        <button
          className='border w-40 text-center p-1'
          onClick={handleIsExpanded}
          style={dropdownStyle}>
          {dropdownData.label}
        </button>
        {isExpanded && (
          <div className='absolute bottom-22 bg-gray-100'>{generatedDropdownList}</div>
        )}
        <div>Pick your favourite color</div>
      </div>
    </div>
  );
}

export default Dropdown;
