import React, {useEffect, useState} from 'react'
import axios from 'axios'
import personsService from './services/persons'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhoneNumber, setNewPhoneNumber] = useState('')
    const [nameFilter, setNameFilter] = useState('')

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log('promise fulfilled')
                setPersons(response.data)
            })
    }, [])

    const handleOnNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleOnPhoneNumberChange = (event) => {
        setNewPhoneNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some((person => person.name === newName))) {
            const modifiedPerson = {...persons.find(person => person.name === newName), number: newPhoneNumber}
            if (window.confirm(`${modifiedPerson.name} is already added to phonebook. Replace the old number with a new one?`)) {
                personsService
                    .update(modifiedPerson.id, modifiedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
                        setNewName('')
                        setNewPhoneNumber('')
                    })
            }
        } else {
            const newPerson = {
                name: newName,
                number: newPhoneNumber,
            }
            personsService.create(newPerson)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewPhoneNumber('')
                })
        }

    }

    const personsToShow = nameFilter.normalize() === ''.normalize()
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

    const handleOnChangeNameFilter = (event) => {
        setNameFilter(event.target.value)
    }

    const handleOnClickDeletePerson = ({person: personToDelete}) => {
        if (window.confirm(`Delete ${personToDelete.name}`)) {
            personsService.del(personToDelete.id)
                .then(response => {
                    setPersons(persons.filter(person => person.id !== personToDelete.id))
                })
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter text="Filter shown with :" value={nameFilter} onChangeHandler={handleOnChangeNameFilter}/>
            <h3>Add a new</h3>
            <PersonForm
                onSubmitHandler={addPerson}
                newName={newName}
                handleOnNameChange={handleOnNameChange}
                newPhoneNumber={newPhoneNumber}
                handleOnPhoneNumberChange={handleOnPhoneNumberChange}
            />
            <h3>Numbers</h3>
            <Persons persons={persons} personsToShow={personsToShow}
                     handleOnClickDeletePerson={handleOnClickDeletePerson}/>
        </div>
    )
}

const Filter = ({text, value, onChangeHandler}) => {
    return (
        <div>
            {text}
            <input value={value} onChange={onChangeHandler}/>
        </div>
    )
}

const PersonForm = ({onSubmitHandler, newName, handleOnNameChange, newPhoneNumber, handleOnPhoneNumberChange}) => {
    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                name: <input value={newName} onChange={handleOnNameChange}/>
            </div>
            <div>number: <input value={newPhoneNumber} onChange={handleOnPhoneNumberChange}/></div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

const Persons = ({persons, personsToShow, handleOnClickDeletePerson}) => {
    return (
        personsToShow.map((person) => {
            return (
                <p key={person.name}>
                    {person.name}
                    {person.number}
                    <button onClick={() => handleOnClickDeletePerson({person})}>Delete</button>
                </p>
            )
        })
    )
}

export default App