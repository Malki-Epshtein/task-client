import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import Nav from './Components/nav';
import { store } from './redux/store';
import Routing from './Components/routing';
import DataLoad from './Components/dataLoad';

  function App() {

  return (
    <div >
      <Provider store={store}>
      <DataLoad/>
      <BrowserRouter>
      <Nav/>
      <Routing/>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
