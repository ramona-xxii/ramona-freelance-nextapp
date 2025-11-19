export default function Section({ children, id, className="" }) {
    
    return(
        <section 
            id={id}
            className={`py-10 sm:py-15 md:py-20 lg:py-25 xl:py-30 2xl:py-35 ${className} scroll-mt-12 sm:scroll-mt-19`}
        >
            {children}
        </section>
    );
}