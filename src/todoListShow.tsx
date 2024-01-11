import React from 'react'
interface objectProps{
    number: Number,
    name:string
}
interface componentProps{
    todo: objectProps[],
    removeItems:(id:number)=>void
}
const TodoListShow:React.FC<componentProps>= ({todo,removeItems})=>
{
    const handleRemove = (id:number) => {
        removeItems(id)
    }
    return (
        <>
            {todo?.length > 0 && todo.map((el => (
                <>
                    <div>{el.name}<button onClick={()=>handleRemove(Number(el.number))}>Delete</button>
                    </div>
                </>)
            ))
            }
        </>
    )
}
export default TodoListShow