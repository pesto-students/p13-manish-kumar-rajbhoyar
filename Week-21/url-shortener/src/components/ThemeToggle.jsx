import React, { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'

function ThemeToggle() {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

    const handleTheme = () => {
      toggleDarkMode();
    }
    
  return (
    <div className='themeButton'>
        <button type='submit'  onClick={handleTheme}>
            {darkMode === "dark" ? 'Light' : 'Dark'}
        </button>
    </div>
  )
}

export default ThemeToggle