import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer () {
    return (
        <footer className="text-gray-400 py-5">
            <div className="flex flex-row justify-center items-center gap-1">
                <FontAwesomeIcon icon={ faCopyright } className="w-4 h-4"/>
                <h1>Ramona McBrearty 2025</h1>
            </div>
        </footer>
    );
}