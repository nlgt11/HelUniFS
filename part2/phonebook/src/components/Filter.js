import React from 'react'

const Filter = ({ searchText, onSearchChangeHandler }) => {
	return (
		<div>
			filter shown with: <input value={searchText} onChange={onSearchChangeHandler}/>
		</div>
	)
}

export default Filter
