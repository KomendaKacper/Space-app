import './App.css';
import Footbar from './Components/Footbar';
import Apod from './Components/Apod';
import { Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {

  return (
    <>
      <Footbar />
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/apod'>
        <Apod />
      </Route>
    </>
  )
}

export default App
