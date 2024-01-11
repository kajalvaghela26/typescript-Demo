import React, { useState } from 'react'
interface todoListProps{
        addToDoList:(userName:string)=>void
}
const TodoList:React.FC<todoListProps> = ({ addToDoList }) => {
        const [userName, setUserName] = useState('')
        const handleList = (e:any) =>
        {
                setUserName(e.target.value )
        }
        const handleSubmit = (e:any ) => {
                e.preventDefault();
                addToDoList(userName);
                setUserName('')
        }
        return(<>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleList} value={userName} />
                <button type='submit'>Submit</button> 
        </form>
        </>)
}
export default TodoList