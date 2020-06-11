import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([
    // { name: 'Arto Hellas', number: '040-123456' },
    // { name: 'Ada Lovelace', number: '39-44-5323523' },
    // { name: 'Dan Abramov', number: '12-43-234345' },
    // { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchText, setSearchText ] = useState('')

  const onNameChangeHandler = event => {
    setNewName(event.target.value);
  }
  const onNumberChangeHandler = event => {
    setNewNumber(event.target.value);
  }

  const onSearchChangeHandler = event => {
    setSearchText(event.target.value);
  }

  const onSubmit = event => {
    event.preventDefault();
    if (persons.map(person => person.name).includes(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } 
    else {
      const newPerson = { name: newName, number: newNumber }
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('');
    }
  }

  const displayedPersons = !searchText ? persons : persons.filter(person => person.name.toLowerCase().includes(searchText.toLowerCase()))

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data);
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      
			<Filter searchText={searchText} onSearchChangeHandler={onSearchChangeHandler} />
      
			<h2>Add a new</h2>
			
			<PersonForm 
				newName = {newName}
				onNameChangeHandler = {onNameChangeHandler}
				newNumber = {newNumber}
				onNumberChangeHandler = {onNumberChangeHandler}
				onSubmit = {onSubmit}
			/>

      <h2>Numbers</h2>
			<Persons displayedPersons={displayedPersons} />
    </div>
  )
}

export default App