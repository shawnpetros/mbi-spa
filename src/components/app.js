import React, { useState } from 'react'
import { Heading, Form, Results } from '.'

const App = ({ name }) => {
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState([])
  const setTotals = totals => {
    console.log(`setTotals was called with ${totals}`)
    setResults([...totals])
    setShowResults(true)
  }
  return (
    <section className='section'>
      <div className='container'>
        <Heading name={name} />
        {!showResults && <Form setTotals={setTotals} />}
        {showResults && <Results results={results} />}
      </div>
    </section>
  )
}

export default App
