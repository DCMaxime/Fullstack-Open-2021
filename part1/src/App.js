import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercices1 = 10
  const part2 = 'Using props to pass data'
  const exercices2 = 7
  const part3 = 'State of a component'
  const exercices3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercices1}
      </p>
      <p>
        {part2} {exercices2}
      </p>
      <p>
        {part3} {exercices3}
      </p>
      <p>Number of exercices {exercices1 + exercices2 + exercices3}</p>
    </div>
  )
}

export default App