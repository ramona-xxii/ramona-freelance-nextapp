'use client'

import { useState } from "react";

export default function Form () {

    // prevent page reload after submit
    function handleSubmit(e) {
        e.preventDefault();

        const {name, subject, email, message} = inputs;
        const errors = {};
        
    }

    const [inputs, setInputs] = useState({
        name: "",
        subject: "",
        email: "",
        message: ""
        });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value}))
    }

    return (

        <form method="post" onSubmit={handleSubmit} className="flex flex-col bg-neutral-50 w-xl h-auto py-10 px-5 gap-5">
            <input type="text" name="name" value={inputs.name} onChange={handleChange} placeholder="Name" className="bg-pink-100"/>
            <input type="text" name="subject" value={inputs.subject} onChange={handleChange} placeholder="Subject" />
            <input type="email" name="email" value={inputs.email} onChange={handleChange} placeholder="your.email@mail.com" />
            <textarea name="message" value={inputs.message} onChange={handleChange} placeholder="message"></textarea>
            <button type="submit" className="bg-cyan-300 w-fit px-5 py-2 rounded-md">Send</button>
        </form>
        
    );
}