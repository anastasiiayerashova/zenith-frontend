import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useId } from 'react';
import * as Yup from 'yup';
import s from './ContactForm.module.css'


const ContactForm = () => {

    const schema = () => {
    return Yup.object().shape({
        name: Yup.string()
            .required('Name is required')
            .matches(/^[а-яА-ЯёЁЇїІіЄєҐґa-zA-Z\s]+$/, 'Name should contain only letters'),
        email: Yup.string()
            .required('Email is required')
            .email('Email must be valid')
            .matches(/^[a-zA-Z0-9._%+-]+@(gmail\.com|meta\.ua|ukr\.net)$/i, 'Enter a valid email'),
        message: Yup.string()
            .required('Message is required')
            .min(5, 'Message should contain at least 5 characters')
            .max(30, 'Message cannot exceed 30 characters')
    })
    }
    
    const nameId = useId()
    const emailId = useId()
    const msgId = useId()

    const {
        register,
        handleSubmit,
        reset,
        trigger,
        getValues,
        watch,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema()),
        values: { name: '', email: '', message: '' },
        mode: 'onChange',
        reValidateMode: 'onChange'
    })

    return (
        <div className={s.container}>
            <form className={s.form}>
                <div className={s.input_group}>
                    <label htmlFor={nameId} className={s.visually_hidden}>Name</label>
                    <input id={nameId} type='text' {...register('name')} placeholder='NAME' />
                    {errors.name && <p className={s.error}>{errors.name.message}</p>}
                </div>
                <div className={s.input_group}>
                    <label htmlFor={emailId} className={s.visually_hidden}>Email</label>
                    <input id={emailId} type='text' {...register('email')} placeholder='YOUR EMAIL' />
                    {errors.email && <p className={s.error}>{errors.email.message}</p>}
                </div>
                <div className={s.input_group}>
                    <label htmlFor={msgId} className={s.visually_hidden}>Message</label>
                    <textarea rows='5' cols='30' id={msgId} type='text' {...register('message')} placeholder='MESSAGE' />
                    {errors.message && <p className={s.error}>{errors.message.message}</p>}
                </div>
                <button className={s.btn} type='submit'>Send message</button>
            </form>
        </div>
    )
}

export default ContactForm