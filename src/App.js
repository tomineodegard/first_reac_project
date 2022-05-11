import { useState } from "react";
import "./App.css"
import ListItem from './components/ListItem'
import DisplayTheseTasksToggle from "./components/DisplayTheseTasksToggle";

export default function App() {

  const [tasks, setTasks] = useState([
    {
      id:1,
      task:"Do the dishes",
      completed:false,
    },
    {
      id:2,
      task:"Clean the room",
      completed:true,
    },
  ]);

  // TO DO: delete item(id) - done
  function deleteItem(id) {
    setTasks((oldState) => oldState.filter((item) => item.id !== id));
  }

  // TO DO: Toggle between completed/not completed - done
  function toggleComplete(id) {
    setTasks((oldState) => {
      return oldState.map((item) => {
        if(id === item.id) {
          const newItem = { ... item };
          newItem.completed = !newItem.completed;
          return newItem;
        }
        return item;
      });
    });
  }

// TO DO: Show all the tasks that are not completed/all of them  - done
// creating a const using useState, with the state variable and the "updated function/setFunction"
const [showCompleted, setShowCompleted] = useState(true);

let all = tasks;
  if (!showCompleted) {
    all = tasks.filter((item) => item.completed === false);
  }


  // TO DO: Submit/add tasks - done
  function submit(e) {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      task: e.target.elements.name.value,
      completed: false,
    };
    setTasks((oldState) => oldState.concat(newTask));
  }
  
  return (
    <div id="App">
      <DisplayTheseTasksToggle showCompleted={showCompleted} setShowCompleted={setShowCompleted}/>
      
      <h1>React To Do List</h1>
      <form onSubmit={submit}>
        <label htmlFor="name">Add a task</label>
          <input required type="text" id="name" name="task"></input>
          <button>Add task to list</button>
          
      </form>
      <ul>
            {all.map((task) => (
            <ListItem 
            toggleComplete={toggleComplete} 
            deleteItem={deleteItem}
            {...task}/>
            ))}
          </ul>
    </div>
  );
}