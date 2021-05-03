import React, {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])
    const [newName, setNewName] = useState('')

    const handleOnChange = (event) => {
        setNewName(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some((person => person.name === newName)))
            alert(`${newName} is already added to phonebook`)
        else {
            const newPerson = {
                name: newName
            }
            setPersons(persons.concat(newPerson))
            setNewName('')
        }

    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleOnChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map((person) => {
                    return (<p key={person.name}>{person.name}</p>)
                })}
            </div>
        </div>
    )
}

export default App