import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const SingleEvent = ({data}) => {
    const inputEmail = useRef();
    const router = useRouter();
    const [message, setMessage] = useState('')
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const emailValue = inputEmail.current.value;
        const eventId = router?.query.id;

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!emailValue.match(validRegex)) {
            setMessage('Please insert a valid email address');
        }

        try {
            const response = await fetch('/api/email-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailValue,
                    eventId
                })
            });

            if (!response.ok) throw new Error('Error: ${response.status}');
            const data = await response.json();
            console.log('POST', data);
            setMessage(data.message);
            inputEmail.current.value = '';
        } catch (e) {
            console.log("ERROR in fetch request", e)
        }
    };

    return (
        <div className='event-single-page'>
            <h1>{data.title}</h1>
            <Image src={data.image} width={1000} height={500} alt={data.title} />
            <p>{data.description}</p>
            <form onSubmit={onSubmit} className='email-registration'>
                <label>Get Registered for this eventt!</label>
                <input 
                    ref={inputEmail}
                    type="email" 
                    id="email" 
                    placeholder='Please insert your email here'/>
                <button type='submit'>Submit</button>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default SingleEvent