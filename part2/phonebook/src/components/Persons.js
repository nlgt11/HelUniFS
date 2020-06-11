import React from 'react'

const Persons = ({ displayedPersons }) => displayedPersons && displayedPersons.map(person => <div key={person.name}>{ person.name } { person.number }</div>)

export default Persons
