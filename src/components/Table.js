import { Fragment } from 'react';

function Table({ data, config, keyFunction }) {
  const renderedHeaders = config.map((col) => {
    if (col.header) {
      return <Fragment key={col.label}>{col.header()}</Fragment>;
    }

    return <th key={col.label}>{col.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((col) => {
      return <td key={col.label}>{col.render(rowData)}</td>;
    });

    return (
      <tr
        key={keyFunction(rowData)}
        className='border-b'>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
