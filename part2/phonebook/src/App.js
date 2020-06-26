import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import service from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ searchText, setSearchText ] = useState('');
  const [ errorMsg, setErrorMsg ] = useState('');

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
    const person = persons.find(person => person.name === newName);
    if (person) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        service.update(person.id, { name: newName, number: newNumber })
          .then( res => {
            setPersons(persons.map(p => p.id !== person.id ? p : res.data));  
            setErrorMsg(`Updated ${newName}`);
            setTimeout(() => setErrorMsg(''), 3000);
          })
          .catch(err => {
            setErrorMsg(`Information of ${newName} has already been removed from the server`);
            setTimeout(() => setErrorMsg(''), 3000);
          }
          )
      }
    } 
    else {
      const newPerson = { name: newName, number: newNumber }
      service.create(newPerson).then(() => {
          setPersons(persons.concat(newPerson));
          setNewName('');
          setNewNumber('');
          setErrorMsg(`Added ${newName}`);
          setTimeout(() => setErrorMsg(''), 3000);
        }
      )
    }
  }

  const removePerson = personId => {
    if (window.confirm(`Delete?`)) {
      service.remove(personId)
        .then(() => setPersons(persons.filter(person => person.id !== personId)))
    }
  }

  const displayedPersons = !searchText ? persons : persons.filter(person => person.name.toLowerCase().includes(searchText.toLowerCase()))

  useEffect(() => {
    service.getAll()
      .then(response => {
        setPersons(response.data);
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      
      {errorMsg && <Notification message={errorMsg}></Notification>}

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
			<Persons displayedPersons={displayedPersons} removePerson={removePerson}/>
    </div>
  )
}

export default App