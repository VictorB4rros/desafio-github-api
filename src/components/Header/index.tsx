import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {

    return (
        <header className="header">
            <Link to={"/home"}>
                <p className="header-title">Github API</p>
            </Link>
        </header>
    );
}