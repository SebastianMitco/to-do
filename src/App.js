import React,{useState,useEffect} from "react";
import "./App.css";
import Form from"./components/Form.js";
import TodoList from "./components/TodoList.js";
function App() {
  const[inputText, setInputText]=useState("");
  const[todos,setTodos]= useState([]);
  const[status,setStatus] =useState('All');
  const[filteredTodos, setFilteredTodos]= useState([]);
//run once
useEffect(() =>{
  getLocalTodos(0);
}, [])
    //USE EFX
    useEffect(() => {
      filterHandler();
      saveLocalTodos();
    },[todos,status]);

  //function
  const filterHandler= () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=> todo.completed ===true))
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo=> todo.completed ===false))
          break; 
          default:
            setFilteredTodos(todos);
            break;
    }
  }
  //Save local
   const saveLocalTodos = () => {
       localStorage.setItem('todos', JSON.stringify(todos))
   }
   const getLocalTodos = () =>{
    if(localStorage.getItem('todos') ===null){
      localStorage.setItem('todos',JSON.stringify([]))
    }else {
      let todolocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todolocal)
    }
   }
  return (
    <div className="App">
      <header>
        <h1>To Do List from Sebastian Mitco</h1>
        </header>
        <Form  
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
        />
        <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}

        />
    </div>
  );
}

export default App;
