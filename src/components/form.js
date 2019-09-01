import React, { useState, useEffect } from 'react'
import { Questions } from '.'

const sections = ['sectionA', 'sectionB', 'sectionC']

const Form = ({ setTotals: setResults }) => {
  const [complete, setComplete] = useState(false)
  const [totals, setTotals] = useState([])
  const [section, setSection] = useState(0)

  useEffect(
    () => {
      if (complete) {
        setResults(totals)
        console.log(`section number ${section}, totals are ${totals}`)
      }
    },
    [complete]
  )

  const gatherTotals = totalFromSection => {
    if (section === sections.length - 1) {
      setTotals([...totals, totalFromSection])
      setComplete(true)
      return
    }
    setComplete(false)
    setTotals([...totals, totalFromSection])
    setSection(section + 1)
  }
  return (
    <form>
      <Questions section={sections[section]} setTotal={gatherTotals} />
    </form>
  )
}

export default Form
