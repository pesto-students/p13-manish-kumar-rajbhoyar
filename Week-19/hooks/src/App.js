import './App.css';
import BookList from './components/BookList';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {

  return (
    <DarkModeProvider>
      <BookList />
    </DarkModeProvider>
  );
}

export default App;