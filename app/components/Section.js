export default function Section({ children, id, className="" }) {
    return(
        <section 
            id={id}
            className={`py-15 sm:py-20 md:py-25 lg:py-30 xl:py-35 2xl:py-40 ${className}`}
        >
            {children}
        </section>
    );
}