'use client'

import { useState } from "react";

export default function Form () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    async function onSubmit(e) {
        
        e.preventDefault(); // prevent default page reload on submit
        console.log('Data', name, email, subject, message); // for testing purposes

        const payload = { name, email, subject, message }; // bundle form input values into 'payload' object

        // after doing fetch, it put server's response object into 'res' (could be status 200, 400, 500, etc...)
        const res = await fetch('api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application.json' }, // tells server to expect json so it can parse it correctly
            body: JSON.stringify(payload) // convert javascript objects => json string
        });

        // converts 'res' response body and converts from json => javascript object
        const data = await res.json();
        console.log(data);  // for testing purposes
        
    }
    

    return (
        <form method="post" onSubmit={onSubmit} className="flex flex-col bg-neutral-50 w-xl h-auto py-10 px-5 gap-5 rounded-md">
            {/* form inputs */}
            <div className=" flex flex-col gap-5">
                <input type="text" name="name" placeholder="Name" className="form-input" 
                    value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email" name="email"  placeholder="youremail@domain.com" className="form-input" 
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" name="subject"  placeholder="Subject" className="form-input" 
                    value={subject} onChange={(e) => setSubject(e.target.value)}/>
                <textarea name="message"  placeholder="Message..." className="form-input h-36" 
                    value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            {/* subit button */}
            <div className="flex justify-center items-center">
                <button type="submit" className="border border-solid border-neutral-500 w-fit px-5 py-2 rounded-md">Send</button>
            </div>
        </form>
        
    );
}