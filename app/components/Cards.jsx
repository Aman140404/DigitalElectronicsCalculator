import React from 'react'
const Cards = ({ data }) => {

  return (
    < div className='w-48 h-40 bg-pink-600 mx-5 mb-5 my-5 text-center border-solid border-2 border-sky-500 ' >
      <h3>{data.operation}</h3>
      <p>{data.description}</p>
    </div >
  )
}

export default Cards