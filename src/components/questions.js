import React, { useState, useEffect } from 'react'
import { Responses } from '.'
import { questionObj } from '../utils/constants'

const Questions = ({ section, setTotal }) => {
  const [complete, setComplete] = useState(false)
  const [qNum, setQNum] = useState(0)
  const [runningTotal, setRunningTotal] = useState(0)

  useEffect(
    () => {
      if (complete) {
        setTotal(runningTotal)
        setQNum(0)
        setRunningTotal(0)
      }
    },
    [complete]
  )

  const sectionQuestions = questionObj[section]
  const onSubmit = val => {
    if (qNum === sectionQuestions.length - 1) {
      console.log(`last one  for ${section} yo! runningTotal = ${runningTotal}`)
      setRunningTotal(val + runningTotal)
      setComplete(true)
      return
    }
    // console.log(`running total is ${runningTotal + val}`)
    setComplete(false)
    setRunningTotal(val + runningTotal)
    setQNum(qNum + 1)
  }
  const questions = sectionQuestions.map((q, i) => (
    <div className='content is-medium' key={`question-${i}`}>
      <p>{q}</p>
      <Responses onSubmit={onSubmit} />
    </div>
  ))
  return (
    <div>
      <div>{questions[qNum]}</div>
    </div>
  )
}

export default Questions
