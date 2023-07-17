import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: 'Red like wine', value: 'red' },
    { label: 'Green like grass', value: 'green' },
    { label: 'Blue like sky', value: 'blue' },
  ];

  return (
    <Dropdown
      value={selection}
      onChange={handleSelect}
      options={options}
    />
  );
}

export default DropdownPage;
