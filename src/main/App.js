import './App.css';
import Form from './form'
import CardList from './cardList';
import { useState } from 'react';


function App({title}) {
  const [profiles,setProfiles]=useState([]);
  const addNewProfile=(profileData)=>{
    setProfiles((oldState) => [...oldState,profileData])
  }
  return (
    <div>
      <div className='header'>
        {title}
      </div>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    
      
    </div>
    
   
  );
}

export default App;
