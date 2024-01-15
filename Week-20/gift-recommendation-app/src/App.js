import './App.css';
import GiftForm from './components/GiftForm';
// import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    {/* <Counter /> */}
    <GiftForm />
    </div>
    </Provider>
  );
}

export default App;
