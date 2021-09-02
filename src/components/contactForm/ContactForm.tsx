import React, {ChangeEventHandler, MouseEvent, useState} from 'react';
import emailjs from 'emailjs-com';
import styles from './contactForm.module.css'

interface IInput {
    nombre: '',
    asunto: '',
    email: '',
    mensaje: ''
}

const validate = (input: IInput) => {
    let errors = {
        nombre: '',
        asunto: '',
        email: '',
        mensaje: ''
    }

    if (!input.nombre.length) {
        errors.nombre = 'Por favor introduzca su nombre!'
    }

    if (!input.asunto.length) {
        errors.asunto = 'Por favor introduzca un asunto!'
    }

    if (!input.email.length) {
        errors.email = 'Por favor introduzca su email!'
    }

    if (!input.mensaje.length) {
        errors.mensaje = 'Por favor introduzca su mensaje!'
    }

    return errors
}

const ContactForm = () => {
    const [input, setInput] = useState<IInput>({
        nombre: '',
        asunto: '',
        email: '',
        mensaje: ''
    })

    const [errors, setErrors] = useState({
        nombre: '',
        asunto: '',
        email: '',
        mensaje: ''
    })

    const handleInputChange = (e: any) => {
        const {name, value} = e.target
        setInput({
            ...input,
            [name]: value
        })
        setErrors(validate({
            ...input,
            [name]: value
        }))
    }

    const sendEmail = (e: any) => {
        e.preventDefault()
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.email)
        if (input.nombre && input.asunto && input.mensaje && regex) {
            emailjs.sendForm('service_6mhv262', 'template_rxvhb0e', e.target, 'user_3QdYBisygQn4oNV7Mwdg5')
            .then(result => {
                console.log(result.text)
            }, error => {
                console.log(error.text)
            })
            e.target.reset()
            setInput({
                ...input,
                mensaje: ''
            })
        } else {
            setErrors(validate(input))
        }
    }

    return (
        <form onSubmit={sendEmail} className={styles.form}>

            <label className={styles.label}>
                Nombre:
            </label>
                <input onChange={handleInputChange} type='text' placeholder='Nombre...' name='nombre' className={styles.input} />
                {errors.nombre && (
                    <p className={styles.danger}>{errors.nombre}</p>
                )}

            <label className={styles.label}>
                Asunto:
            </label>
                <input onChange={handleInputChange} type='text' placeholder='Asunto...' name='asunto' className={styles.input} />
                {errors.asunto && (
                    <p className={styles.danger}>{errors.asunto}</p>
                )}

            <label className={styles.label}>
                Correo:
            </label>
                <input onChange={handleInputChange} type='email' placeholder='Correo...' name='email' className={styles.input} />
                {errors.email && (
                    <p className={styles.danger}>{errors.email}</p>
                )}

            <label className={styles.label}>
                Mensaje:
            </label>
                <textarea name='mensaje' onChange={handleInputChange} value={input.mensaje} placeholder='Envianos tu consulta...' className={styles.textarea} />
                {errors.mensaje && (
                    <p className={styles.danger}>{errors.mensaje}</p>
                )}
            
            <input className={styles.btn} type='submit' value='Enviar' />

        </form>
    )
};

export default ContactForm;
