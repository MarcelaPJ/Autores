import axios from 'axios';

export const getAllAutores = () => axios.get('http://localhost:8000/api/autor');

export const getOneAutor = (id) => axios.get(`http://localhost:8000/api/autor/${id}`);

export const createNewAutor = (autor) => axios.post('http://localhost:8000/api/autor', { autor });

export const updateOneAutor = (id, autor) => axios.put(`http://localhost:8000/api/autor/${id}`, { autor });

export const deleteAutor = (id) => axios.delete(`http://localhost:8000/api/autor/${id}`);
