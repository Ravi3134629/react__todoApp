import React ,{useState,useEffect} from 'react';
 import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
import {Button,FormControl,Input,InputLabel} from '@material-ui/core';
function App() {
  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState('');
  useEffect(()=>{
db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
  setTodos(snapshot.docs.map(doc =>({id:doc.id,todo:doc.data().todo})))
})
  },[]);
  console.log(input);
  const addTodo=(event)=>{
console.log("hello");
event.preventDefault();

db.collection('todos').add({
  todo:input,
  timestamp:firebase.firestore.FieldValue.serverTimestamp()
})
setTodos([...todos,input]);
 setInput('');  }
  return (
    <div className="App">
      <h1>TODO</h1>
      <form>
      
      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <input value={input} onChange={event=>setInput(event.target.value)} />
      </FormControl>
      <Button  disabled={!input } type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
        </Button>
      {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
      </form>
      
      <ul>
        {todos.map(todo =>(
          <Todo todo={todo}/>
        ))}
        
              </ul>
    </div>
  );
}

export default App;
