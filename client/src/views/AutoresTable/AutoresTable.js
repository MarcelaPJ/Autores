import React, { useState, useEffect } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { deleteAutor, getAllAutores } from '../../services/autores_service';
import styles from './AutoresTable.module.scss';


const AutoresTable = () => {                        
    const navigate = useNavigate(); 
    const [autores, setAutores] = useState([]);

    const getAutoresFromService = async () => {
        try{ 
            const autoresFromService = await getAllAutores();
            setAutores(autoresFromService.data.autores);

        } catch (error) {
            console.log(error)
        }
    };

    const removeAutorFromService = async (id) => {
        try{
            await deleteAutor(id);
            const newAutoresList = autores.filter(autor => autor._id !== id);
            setAutores(newAutoresList);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAutoresFromService();
    }, []);

    return(
       <div className={styles["table-container"]}>
            <h1>Favorite authors</h1>
            <Link to="/crear-autor" className={styles["link"]}>Add an author</Link>
            <h3 className={styles["sub-title"]}>We have quotes by:</h3>
            <Table className={styles["table-autores"]} striped bordered hover>
                <thead className={styles["thead"]}>
                    <tr>
                        <th>Author</th>
                        <th>Author quote</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {autores.length > 0 ? autores.map((autor, index) => (
                    <tr key={autor._id}>
                        <td>{autor.fullName}</td>
                        <td>{autor.author_quote}</td>
                        <td>
                            <Button onClick={() => navigate(`/editar-autor/${autor._id}`)}>Edit</Button>
                            <Button onClick={() => removeAutorFromService(autor._id)}>Delete</Button>
                        </td>
                    </tr>
                    )) :
                    <tr>
                        <td colSpan={3}>Aún no se ha ingresado un autor</td>
                    </tr>
                    }
                </tbody>
            </Table>
       </div>
    )
}

export default AutoresTable;