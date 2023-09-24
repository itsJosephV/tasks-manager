import React from 'react'
import { NoTodosIcon } from '../icons'

const NoTodos = () => {
  return (
    <div className='flex flex-col items-center mt-12 gap-4'>
      <div>
        <NoTodosIcon width={"6em"} height={"6em"} fill={"#3f3f46"} />
      </div>
      <div>
        <p className='text-[18px] text-zinc-700'>Your list is empty, start creating!</p>
      </div>
    </div>
  )
}

export default NoTodos