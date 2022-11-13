import React, { Suspense } from 'react'
import TodosList from './(user)/todos/TodosList'

function Home() {
  return (
    <div>

      <Suspense fallback={<p>Loading the Todos</p>}>
        <h1>Loading Todos</h1>
        <div className='flex space-x-2'>
          {/* @ts-ignore */}
          <TodosList/>
        </div>
      </Suspense>

      <Suspense fallback={<p>Loading shopping cart</p>}>
        <h1>Loading Shopping Cart</h1>
        <div className='flex space-x-2'>
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
    </div>

  )
}

export default Home
