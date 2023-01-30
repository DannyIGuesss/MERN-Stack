import Form from './components/Form';
import DisplayList from './components/DisplayList';
import React, {useState} from 'react';
import './App.css'

function App() {
  const [state, setState] = useState('')
  const [list, setList] = useState([])
  return (
    <div >
      <Form list = {list} setList= {setList} setState={setState}/>

      <DisplayList list= {list} setList= {setList}/>
    </div>
  );
}

export default App;