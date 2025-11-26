'use client'

import { useState } from "react";

export default function Form () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = (e) => {
        {/* prevent default page reload on submit */}
        e.preventDefault();
        console.log('Data', name, subject, email, message)
    }
    

    return (
        <form method="post" onSubmit={onSubmit} className="flex flex-col bg-neutral-50 w-xl h-auto py-10 px-5 gap-5 rounded-md">
            {/** form inputs */}
            <div className=" flex flex-col gap-5">
                <input type="text" name="name" placeholder="Name" className="form-input" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" name="subject"  placeholder="Subject" className="form-input" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                <input type="email" name="email"  placeholder="youremail@email.com" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <textarea name="message"  placeholder="Message..." className="form-input h-36" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            {/** subit button */}
            <div className="flex justify-center items-center">
                <button type="submit" className="border border-solid border-neutral-500 w-fit px-5 py-2 rounded-md">Send</button>
            </div>
        </form>
        
    );
}