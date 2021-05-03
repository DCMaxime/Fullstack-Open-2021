import React, {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newPhoneNumber, setNewPhoneNumber] = useState('')

    const handleOnNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleOnPhoneNumberChange = (event) => {
        setNewPhoneNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some((person => person.name === newName)))
            alert(`${newName} is already added to phonebook`)
        else {
            const newPerson = {
                name: newName,
                number: newPhoneNumber,
            }
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewPhoneNumber('')
        }

    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleOnNameChange}/>
                </div>
                <div>number: <input value={newPhoneNumber} onChange={handleOnPhoneNumberChange} /></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map((person) => {
                    return (<p key={person.name}>{person.name} {person.number}</p>)
                })}
            </div>
        </div>
    )
}

export default App