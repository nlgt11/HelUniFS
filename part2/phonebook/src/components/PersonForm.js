import React from 'react'

const PersonForm = ({ newName, onNameChangeHandler, newNumber, onNumberChangeHandler, onSubmit }) => {
	return (
		<form>
			<div>
				name: <input value={newName} onChange={onNameChangeHandler}/>
			</div>
			<div>number: <input value={newNumber} onChange={onNumberChangeHandler} /></div>
			<div>
				<button type="submit" onClick={onSubmit}>add</button>
			</div>
		</form>
	)
}

export default PersonForm
