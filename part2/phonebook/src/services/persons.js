import axios from 'axios';
const baseURL = 'http://localhost:3001/persons';

const getAll = () => axios.get(baseURL);

const create = newPerson => axios.post(baseURL, newPerson);

const remove = personId => axios.delete(`${baseURL}/${personId}`);

const update = (personId, newPerson) => axios.put(`${baseURL}/${personId}`, newPerson);

export default { getAll, create, remove, update }