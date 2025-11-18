export default function ServiceCard({title, description}) {
    
    return(

        <div className="bg-purple-300 rounded-lg px-5 py-4">
            <h1 className="text-center text-base sm:text-lg md:text-xl">{title}</h1>
            <p className="py-2">{description}</p>
            <button className="w-full border border-black rounded-lg px-3 py-1.5">Button</button>
        </div>
        
    );
}