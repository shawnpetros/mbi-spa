import React from 'react'
import { getResults, BURNOUT_RISK_CONSTANTS } from '../utils'

const burnoutSeries = arr => getResults(arr)

const Results = ({ results }) => {
  console.log(`results are ${results}`)
  const burnoutScore =
    burnoutSeries(results) > 3
      ? BURNOUT_RISK_CONSTANTS[0]
      : BURNOUT_RISK_CONSTANTS[1]

  console.log(`burnout score is ${burnoutScore}`)
  return <div>{burnoutScore}</div>
}

export default Results
