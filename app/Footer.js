import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer () {
    return (
        <footer className="text-center text-gray-400 py-5"><FontAwesomeIcon icon={ faCopyright }/> Ramona McBrearty 2025</footer>
    );
}