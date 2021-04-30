import React, {useState} from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const handleGoodClick = () => {
        setAll(all + 1)
        setGood(good + 1)
    }
    const handleNeutralClick = () => {
        setAll(all + 1)
        setNeutral(neutral + 1)
    }
    const handleBadClick = () => {
        setAll(all + 1)
        setBad(bad + 1)
    }

    return (
        <div>
            <Header text="Give feedback"/>
            <Button handleClick={handleGoodClick} text="Good"/>
            <Button handleClick={handleNeutralClick} text="Neutral"/>
            <Button handleClick={handleBadClick} text="Bad"/>
            <Header text="Statistics"/>
            <Statistics good={good} neutral={neutral} bad={bad} all={all}/>

        </div>
    )
}

const Header = ({text}) => <h1>{text}</h1>
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistic = ({text, count: value}) => (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
)

const Statistics = ({good, neutral, bad, all}) => {
    if (all < 1) return <p>No feedback given</p>
    return (
        <table>
            <tbody>
                <Statistic text="Good" count={good}/>
                <Statistic text="Neutral" count={neutral}/>
                <Statistic text="Bad" count={bad}/>
                <Statistic text="All" count={all}/>
                <Statistic text="Average" count={(good - bad) / all}/>
                <Statistic text="Positive" count={good / (good + bad + neutral) * 100 + ' %'}/>
            </tbody>
        </table>
    )
}

export default App