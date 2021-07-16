import { useEffect, useState } from 'react'
import './App.css';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase'

function App() {

  const [todoList,setTodoList] = useState([]);
  const [input,setInput] = useState('');

//When app loads fetch data and set in todoList
  useEffect(()=>{
    db.collection("todos").orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodoList(snapshot.docs.map(doc=>doc.data().todo))
    })
  },[])

  const addToDo = (event)=>{
    event.preventDefault();
    db.collection("todos").add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('')
  }
  
  console.log(input)
  console.log(todoList)
  return (
    <div className="App">
      <h1> HEllo Welcome to TODO APP</h1>
      <form>
        {/* <input value={input} onChange={(e)=>{setInput(e.target.value)}}/> */}
        <FormControl>
          <InputLabel>Enter todo</InputLabel>
          <Input value={input} onChange={(e)=>{setInput(e.target.value)}}/>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addToDo} variant="contained" color="primary">
          Add Todo
        </Button>
        {/* <button type="submit" onClick={addToDo}>Add Todo</button> */}
      </form>
      <ul>
        {todoList.map((todo)=>(
          <Todo todo={todo}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
