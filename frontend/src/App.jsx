import './App.css';
import Sidebar from './Components/Sidebar';
import Apod from './Components/Apod';
import { Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {

  return (
    <div className='flex flex-col'>
      <Sidebar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/apod'>
        <Apod />
      </Route>
    </div>
  )
}

export default App
