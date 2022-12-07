import React from 'react';

import './ExpensesFilter.css';

interface Props {
  setSelectedYear: (selectedYear: number | undefined) => void;
}

const ExpensesFilter = ({setSelectedYear}:Props) => {

  const handleSelectedYear = (value: number | undefined) => {
    setSelectedYear(value || undefined);
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSelectedYear(Number(e.target.value) ?? e.target.value)}>
          <option  value={undefined}>All</option>
          <option  value={2022}>2022</option>
          <option value={2021}>2021</option>
          <option value={2020}>2020</option>
          <option value={2019}>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;