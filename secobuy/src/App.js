import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepages/homepage.component';


const HatsPage = () => (
  <div>
    <h1> Hates Page </h1>
  </div>
)

function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage}/>
      </switch>
    </div>
  );
}


export default App;
