export default function Section({ children, id, className="" }) {
    
    return(
        <section 
            id={id}
            className={`${className} scroll-mt-12 sm:scroll-mt-19`}
        >
            {children}
        </section>
    );
}