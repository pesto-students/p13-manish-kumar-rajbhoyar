import React, { createContext, useState } from 'react'

const DarkModeContext = createContext();

function DarkModeProvider(props) {
  // const currentTheme = localStorage.getItem("pageTheme")
  // const initialTheme = currentTheme ? currentTheme : "light"
  const [darkMode, setDarkMode] = useState("light")
  const toggleDarkMode = () => {
    if(darkMode === "dark") setDarkMode("light")
    else setDarkMode("dark")
  }

  // useEffect(() => {
  //   localStorage.setItem("pageTheme", darkMode)
  // },[darkMode])

  return (
    <div>
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    </div>
  )
}

export {DarkModeContext, DarkModeProvider}