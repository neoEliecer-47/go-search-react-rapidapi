import React from 'react'
import {RotatingSquare} from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='flex justify-items-center items-center'>
        <RotatingSquare 
            color='#437DE4'
            width="150"
            height="150"
            ariaLabel="rotating-square-loading"
            strokeWidth="4"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>
  )
}

export default Loading