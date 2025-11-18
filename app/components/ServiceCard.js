export default function ServiceCard({title, description}) {
    
    return(

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-purple-300 rounded-lg px-5 py-4">
              <h1 className="text-center text-base sm:text-lg md:text-xl">{title}</h1>
              <p className="py-2">{description}</p>
              <button className="w-full border border-black rounded-lg px-3 py-1.5">Button</button>
            </div>
        </div>

    );
}