import React from 'react'
import { Todo } from '../../../../typings'
import { notFound } from "next/navigation" 

export const dynamicParams = true;

type PageProps = {
  params: {
    id: string
  }
}

const fetchTodo = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, 
    { next: { revalidate: 60 } })
  const todo = await res.json();
  return todo;
}

async function TodoPage({params: { id } }:PageProps) {
  const todo: Todo = await fetchTodo(id)

  if (!todo.id) return notFound();

  return (
    <div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg text-black' >
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>
        Completed: {todo.completed ? "Yes" : "No"}
      </p>
      <p className='border-t border-black mt-5 text-right'>
        By User: {todo.userId}
      </p>
    </div>
  )
}

export default TodoPage

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();

  const trimmedTodos = todos.splice(0, 10)

  return trimmedTodos.map(todo => ({
    id: todo.id.toString(),
  }))
}
