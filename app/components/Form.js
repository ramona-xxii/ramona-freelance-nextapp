import { useState } from "react";

export default function Form () {

    return (

        

        <form className="flex flex-col bg-neutral-50">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" placeholder="Subject" />
            <input type="email" placeholder="your.email@mail.com" />
            <textarea placeholder="message"></textarea>
        </form>
        
    );
}