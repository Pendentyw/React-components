// import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

function TablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5, taste: 'sweet and sour' },
    { name: 'Apple', color: 'bg-red-500', score: 2, taste: 'sweet and sour' },
    { name: 'Banana', color: 'bg-yellow-500', score: 1, taste: 'very sweet' },
    { name: 'Plum', color: 'bg-pink-500', score: 4, taste: 'sweet' },
    { name: 'Grape', color: 'bg-blue-500', score: 2, taste: 'sweet and tart' },
  ];

  const config = [
    {
      label: 'Name',
      render: (fruit) => <div className='p-1 m-1 '>{fruit.name}</div>,
      sortValue: (fruit) => fruit.name,
    },
    { label: 'Color', render: (fruit) => <div className={`p-3 m-3 ${fruit.color}`}></div> },
    {
      label: 'Score',
      render: (fruit) => <div className='p-1 m-1 justify-center flex'>{fruit.score}</div>,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFunction = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable
        data={data}
        config={config}
        keyFunction={keyFunction}
      />
    </div>
  );
}

export default TablePage;
