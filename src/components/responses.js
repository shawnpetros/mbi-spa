import React, { useState } from 'react'
import { questionObj } from '../utils/constants'

const { answers } = questionObj

const answerRadios = answers.map((ans, i) => (
  <option value={i} key={`select-opt-${i}`}>
    {ans}
  </option>
))

const Responses = ({ onSubmit }) => {
  const [val, setVal] = useState(0)

  const handleSubmit = evt => {
    evt.preventDefault()
    console.log(`value is ${answers[val]}`)

    onSubmit(Number(val))
  }

  return (
    <div className='field has-addons'>
      <p className='control has-icons-left'>
        <span className='select'>
          <select
            name='response'
            val={val}
            onChange={e => setVal(e.target.value)}
          >
            {answerRadios}
          </select>
        </span>
        <span className='icon is-left'>
          <i className='far fa-meh-rolling-eyes' />
        </span>
      </p>
      <div className='control'>
        <button
          type='submit'
          className='button is-primary'
          onClick={handleSubmit}
        >
          Submit Reponse
        </button>
      </div>
    </div>
  )
}

export default Responses
