import React, { Suspense } from 'react'

function Home() {
  return (
    <div>
      <p className='text-lg'>Homepage</p>
{/*
      <Suspense fallback={<p>Loading the Todos</p>}>
        <h1>Loading Todos</h1>
        <div className='flex space-x-2'>
           @ts-ignore 
          <TodosList/>
        </div>
      </Suspense>

      <Suspense fallback={<p>Loading shopping cart</p>}>
        <h1>Loading Shopping Cart</h1>
        <div className='flex space-x-2'>
          
          <TodosList />
        </div>
      </Suspense>*/}
    </div>

  )
}

export default Home
