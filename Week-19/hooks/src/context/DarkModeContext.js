import React, { createContext, useState, useEffect } from 'react'

const DarkModeContext = createContext();

function DarkModeProvider(props) {
  const currentTheme = localStorage.getItem("theme")
  console.log(currentTheme)
  const initialTheme = currentTheme ? currentTheme : "light"
  const [darkMode, setDarkMode] = useState(initialTheme)
  const toggleDarkMode = () => {
    if(currentTheme === "dark") setDarkMode("light")
    else setDarkMode("dark")
  }

  useEffect(() => {
    localStorage.setItem("theme", darkMode)
  },[darkMode])

  return (
    <div>
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    </div>
  )
}

export {DarkModeContext, DarkModeProvider}