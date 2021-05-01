import React from "react";
import Part from "./Part";

const Content = ({course}) => {
    return (
        <ul>
            {course.parts.map(
                part => <Part key={part.id} part={part}/>
            )}
        </ul>
    )
}

export default Content