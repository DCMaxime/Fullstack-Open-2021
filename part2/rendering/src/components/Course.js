import React from "react";

const Course = ({course}) => {
    return (
        <>
            <Header course={course}/>
            <Content course={course}/>
            <Total parts={course.parts}/>
        </>
    )
}

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Content = ({course}) => {
    return (
        <>
            {course.parts.map(
                part => <Part key={part.id} part={part}/>
            )}
        </>
    )
}

const Total = ({ parts }) => {
    const sum = parts.reduce((s, p) => s + p.exercises, 0)
    return(
        <p><b>Total of {sum} exercises</b></p>
    )
}

const Part = ({part}) => <p> {part.name} {part.exercises} </p>

export default Course