import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import styles from './contactForm.module.css'

const ContactForm = () => {
    const [input, setInput] = useState({
        nombre: '',
        asunto: '',
        email: '',
        mensaje: ''
    })

    const handleChange = (e: any) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const sendEmail = (e: any) => {
        e.preventDefault()
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
    }

    return (
        <form onSubmit={sendEmail} className={styles.form}>

            <label className={styles.label}>
                Nombre:
            </label>
                <input type='text' placeholder='Nombre...' name='nombre' className={styles.input} />

            <label className={styles.label}>
                Asunto:
            </label>
                <input type='text' placeholder='Asunto...' name='asunto' className={styles.input} />

            <label className={styles.label}>
                Correo:
            </label>
                <input type='email' placeholder='Correo...' name='email' className={styles.input} />

            <label className={styles.label}>
                Mensaje:
            </label>
                <textarea name='mensaje' onChange={handleChange} value={input.mensaje} placeholder='Envianos tu consulta...' className={styles.textarea} />
            
            <input className={styles.btn} type='submit' value='Enviar' />

        </form>
    )
};

export default ContactForm;
