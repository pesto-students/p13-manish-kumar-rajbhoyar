import "./App.css";
import { React } from "react";
import { DarkModeProvider } from './context/DarkModeContext';
import URLShortener from "./components/URLShortener";

function App() {
  
  return (
    <DarkModeProvider>
      <URLShortener />
    </DarkModeProvider>
  );
}

export default App;
