import React, {useState} from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => setGood(good + 1)
    const handleNeutralClick = () => setNeutral(neutral + 1)
    const handleBadClick = () => setBad(bad + 1)

    return (
        <div>
            <Header text="Give feedback"/>
            <Button handleClick={handleGoodClick} text="Good"/>
            <Button handleClick={handleNeutralClick} text="Neutral"/>
            <Button handleClick={handleBadClick} text="Bad"/>
            <Header text="Statistics"/>
            <Stats text="Good" count={good}/>
            <Stats text="Neutral" count={neutral}/>
            <Stats text="Bad" count={bad}/>
        </div>
    )
}

const Header = ({text}) => <h1>{text}</h1>
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const Stats = ({text, count}) => <p>{text} {count}</p>

export default App