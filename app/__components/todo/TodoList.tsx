import React from 'react'

       import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Todos from './Todos';
import { API_URL } from '@/lib/config';


export interface TodoItemsProps {
    _id: string;
    title: string;
    isDone: boolean;
}



const TodoList = async () => {

  const res = await fetch(`${API_URL}/api/todo`,{cache: 'no-cache'} );  
      const todos:TodoItemsProps[] = await res.json();
      console.log("Todos fetched:", todos);

    
  return (
    <div className='w-full my-10'>
<Card>
  <CardHeader>
    <CardTitle>Todo's</CardTitle>
    <CardDescription>Become Productive</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    <ul role="list" className='divide-y divide-gray-100'    >
        {todos.map((todo) => (

          <Todos key={todo._id} todo={todo} />    
           
        ))}
    


    </ul>
  </CardContent>

</Card>

    </div>
  )
}

export default TodoList