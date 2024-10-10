import React, { useState } from 'react';
import '../App.css';
import 'animate.css';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import apiKey from './emailKey';
import postData from '../utils/postData'
const Joi = require('joi');

function ContactUs() {
    const [email, setEmail] = useState('');
    const [invalidMail, setInvalidMail] = useState(false);
    const [mailSent, setMailSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleEmail = (e) => {
        setEmail(e.target.value)
    };

    const sendMail = (e) => {
        e.preventDefault();
        setLoading(true);
        setInvalidMail(false);
        setMailSent(false);
        const validationSchema = Joi.string().email({ tlds: false })
        const { error } = validationSchema.validate(email);
        if (error) {
            setInvalidMail(true);
            setLoading(false);
        } else {
            const payload = {
                service_id: apiKey.SERVICE_ID,
                template_id: apiKey.TEMPLATE_ID,
                user_id: apiKey.USER_ID,
                template_params: {
                    'from_name': email,
                }
            };
            postData('https://api.emailjs.com/api/v1.0/email/send', payload)
                .then((res) => {
                    if (res.status === 200)
                        setMailSent(true);
                    else setLoading(false);
                });
        }
    };
    return (
        <div className='cardview seperation'>
            <h3 className='title mbt-0'>Contact Us</h3>
            {invalidMail && (<p className='error'>Please enter a valid email address</p>)}
            {mailSent ? <p className='sucess'>Our executive will contact you shortly</p>
                : <>
                    <TextField className='email' sx={{ m: 1, width: '100%' }} onChange={handleEmail} id="standard-basic" label="Email" variant="standard" />
                    {loading ? <LoadingButton loading variant="outlined">
                        Submit
                    </LoadingButton>
                        : <Button className='sendbtn' onClick={sendMail} variant="contained">Send</Button>}
                </>}
        </div>
    );
}

export default ContactUs;
