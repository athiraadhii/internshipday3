import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Statebasics from './components/Statebasics';

import Signup from './components/Signup';
import Count from './components/Count';
import UseButton from './components/UseButton';
import ListMap from './components/ListMap';
import Mapping from './components/Mapping';
import Api from './components/Api';
import CardNew from './components/CardNew';


function App() {
  return (
    <div className="App">
<Navbar/>
<Routes>
  <Route path='/login' element={<Login/>}/>
  <Route path='/s' element={<Statebasics/>}/>
  <Route path='/c' element={<Count/>}/>
  <Route path='/p' element={<Signup/>}/>
  <Route path='/Z' element={<UseButton/>}/>
  <Route path='/l' element={<ListMap/>}/>
  <Route path='/m' element={<Mapping/>}/>
  <Route path='/a' element={<Api/>}/>
  <Route path='/h' element={<CardNew/>}/>

</Routes>

    </div>
  );
}

export default App;
