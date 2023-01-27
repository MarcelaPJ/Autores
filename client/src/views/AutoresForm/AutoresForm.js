import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createNewAutor, getOneAutor, updateOneAutor } from '../../services/autores_service';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import { Formik, Form, Field } from 'formik';
import styles from './AutoresForm.module.scss';


const AutoresForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [autor, setAutor] = useState({
        fullName: '',
        author_quote: '',
    });

    const [errorsResponse, setErrorsResponse] = useState();

    const getOneAutorFromService = async () => {
        try{
            const autorFromService = await getOneAutor(id);
            setAutor({...autorFromService.data.autor});
        } catch (error) {
            console.log(error)
        };
    };

    useEffect(() => {
        id && getOneAutorFromService(); 
    }, [id]);

    const autorSchema = yup.object().shape({
        fullName: yup.string()
            .min(3, 'El nombre del autor no puede tener menos de 3 caracteres')
            .max(50, 'El nombre del autor no puede tener más de 50 caracteres')
            .required('El nombre del autor es requerido'),
        author_quote: yup.string()
            .min(3, 'La cita del autor no puede tener menos de 3 caracteres')
            .required('La cita del autor es requerida'),
    });

    const sendNewAutor = async (values) => {
        try {
            console.log(values)
            id ? await updateOneAutor(id, values) : await createNewAutor(values);
            navigate("/autores");

        } catch (error) {
            console.log(error.response.data.errors)
            setErrorsResponse(error.response.data.error.errors)
        }
    };
    return (
        <div className={styles["form-container"]}>
            <h1>Favorite authors</h1>
            <Link to="/autores" className={styles["link2"]}>Home</Link>
            <h3 className={styles["new-autor"]}>{id ? 'Edit this author' : 'Add a new author:'}</h3>
            <Formik
                enableReinitialize
                initialValues={autor}
                validationSchema={autorSchema}
                onSubmit={sendNewAutor}
            >
                {({ errors, touched }) => (
                    <Form className={styles["form"]}>
                        <label htmlFor="fullName">Name: </label>
                        <Field className={styles["name"]} name="fullName" />
                        {(errors.fullName && touched.fullName) && (
                            <p>{errors.fullName}</p>
                        )}
                        {errorsResponse?.fullName && (
                            <div>{errorsResponse.fullName.message}</div>
                        )}
                        <label className={styles["autor-quote"]}htmlFor="author_quote">Autor quote: </label>
                        <Field className={styles["quote"]} name="author_quote" />
                        {errors.author_quote && touched.author_quote ? (
                            <div>{errors.author_quote}</div>
                        ) : null}
                        {errorsResponse?.author_quote && (
                            <div>{errorsResponse.author_quote.message}</div>
                        )}
                        <br/>
                        <button className={styles['btn1']} type="submit">Submit</button>
                        <Button className={styles['btn2']} onClick={() => navigate("/autores")}>Cancel</Button>
                    </Form>
                )}
            </Formik>
            

        </div>
    )
}
export default AutoresForm;