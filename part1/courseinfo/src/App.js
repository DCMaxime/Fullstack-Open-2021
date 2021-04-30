import React from 'react'

const Header = (props) => {
    return <h1>{props.course.name}</h1>
}

const Part = (props) => {
    return <p>{props.part} {props.exercices}</p>
}

const Content = (props) => {
    return <>
        <Part part={props.parts[0].name} exercices={props.parts[0].exercices}/>
        <Part part={props.parts[1].name} exercices={props.parts[1].exercices}/>
        <Part part={props.parts[2].name} exercices={props.parts[2].exercices}/>
    </>
}

const Total = (props) => {
    return <p>Number of exercices {props.parts[0].exercices + props.parts[1].exercices + props.parts[2].exercices}</p>
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercices: 10,
            },
            {
                name: 'Using props to pass data',
                exercices: 7,
            },
            {
                name: 'State of a component',
                exercices: 14,
            },
        ]
    }

    return (
        <div>
            <Header course={course}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

export default App