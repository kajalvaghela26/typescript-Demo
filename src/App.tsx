import { useState } from 'react';
import './App.css';
import TodoList from './todoList';
import TodoListShow from './todoListShow';

interface todoObject{
  name: string,
  number: Number,
  key:boolean
}

const App=()=> {
  const [todo, setTodo] = useState<todoObject[]>([])
  const addList = (data:any) => {
    setTodo((prevent)=>[...prevent,{number:todo?.length+1,name:data,key:false}])
  }
  const removeItems = (id:number) => {
    const filterData:any = todo?.length > 0 && todo.filter(el => el.number !== id)
    setTodo(filterData);
  }
  return (
   <div>
      <TodoList addToDoList={addList} />
      <TodoListShow todo={todo} removeItems={removeItems} />
   </div>
  );
}

export default App;
