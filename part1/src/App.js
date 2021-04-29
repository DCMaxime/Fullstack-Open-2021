import React from 'react'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.part} {props.exercices}</p>
}

const Content = (props) => {
  return <>
    <Part part={props.part1} exercices={props.exercices1} />
    <Part part={props.part2} exercices={props.exercices2} />
    <Part part={props.part3} exercices={props.exercices3} />
  </>
}

const Total = (props) => {
  return <p>Number of exercices {props.value}</p>
}

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
      <Header course={course} />
      <Content part1={part1} exercices1={exercices1} part2={part2} exercices2={exercices2} part3={part3} exercices3={exercices3} />
      <Total value={exercices1 + exercices2 + exercices3} />
    </div>
  )
}

export default App