import React from 'react'

const Heading = ({ name }) => (
  <div className='content is-large'>
    <h1 className='title'>Hello {name}</h1>
    <p>Please answer the questions below to the best of your ability:</p>
  </div>
)

export default Heading
