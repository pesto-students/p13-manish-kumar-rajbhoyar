import React, { useState } from 'react'

function BookSorter(props) {
    const sortOptions = [
        { value: "title", label: "Title" },
        { value: "author", label: "Author" },
        { value: "year", label: "Year" },
        { value: "description", label: "Description" }
    ];
    const [sorted, setSorted] = useState(sortOptions[0].value);

    const callBookSorterHook = () => {
        props.sorterFunc(sorted)
    }

    const handleSort = (event) => {
        setSorted(event.target.value);
    };

  return (
    <div className='bookSorter'>
        <select value={sorted} onChange={handleSort}>
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
        <button type='submit' onClick={callBookSorterHook}>Sort</button>
    </div>
  )
}

export default BookSorter