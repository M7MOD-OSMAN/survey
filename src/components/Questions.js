import React, { useState } from 'react'
import Select from './Select'
import questions from '../questions.json'
// data[question.id -1].choices[idx].userAnswer
const Question = () => {
  const [data, setData] = useState(questions)
  console.log(data)
  return (
    <div className='q-cont'>
      {data.length > 0 &&
        data.map((question, qid) => {
          return (
            <div className='question' key={question.id}>
              <h3>{question.question}</h3>
              <ul>
                {question?.choices?.map((choice, idx) => {
                  return (
                    <li key={idx}>
                      <Select
                        qid={qid}
                        cId={choice.idx}
                        idx={idx}
                        userAnswer={choice.userAnswer}
                        setData={setData}
                        data={data}
                      />
                      <div>
                        <span>{choice.idx} </span>
                        <span>{choice.choice}</span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
    </div>
  )
}

export default Question
