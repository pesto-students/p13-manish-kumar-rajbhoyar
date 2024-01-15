import React, { useState } from 'react'

function BookFilter(props) {
    const [value, setValue] = useState('')

    const callBookFilterHook = () => {
        props.filterFunc(value)
    }

  return (
    <div className='bookFilter'>
        <input 
        type="text"
        placeholder='enter a book name'
        value={value} 
        onChange={e => setValue(e.target.value)} 
      />
      <button type='submit' onClick={callBookFilterHook}>Filter</button>
    </div>
  )
}

export default BookFilter