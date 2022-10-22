import React, { useState } from 'react'

const Select = ({ userAnswer, cId, qid, setData, data, idx }) => {
  const options = [
    { value: 'Choose' },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
  ]

  const [selected, setSelected] = useState(options[0].value)
  // data[question.id -1].choices[idx].userAnswer

  const handleChange = (e) => {
    console.log(qid, cId, idx, e.target.value)
    setSelected(e.target.value)
    // setData([ ...data,  data[qId -1].choices[idx].userAnswer: e.target.value ])

    setData((prev) => [...prev, {prev[qid].choices[idx].userAnswer}: e.target.value])
  }

  return (
    <div>
      <select value={selected} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
