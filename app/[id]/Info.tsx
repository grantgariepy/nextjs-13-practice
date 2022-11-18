import React from 'react'
import { Coin } from '../../typings'


function Info({name, description, } :{name: string, description: any,}) {
  return (
    <div className='p-10 bg-warning border-2 m-2 shadow-lg'> 
        <p className='text-4xl font-bold'>
          {name}
        </p>
        <p dangerouslySetInnerHTML={{ __html: description }} 
            className="border-t border-black"
            id="coinDesc"
            >
        </p>
      </div>
  )
}

export default Info