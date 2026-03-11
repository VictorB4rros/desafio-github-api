import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import './styles.css';

export default function Home() {

    return (
        <main className="home-main">
            <section>
                <h1 className="home-title">Desafio Github API</h1>
                <p className="home-subtitle">DevSuperior - Escola de programação</p>
                <div className="button-container">
                    <Link to={"/find"}>
                        <Button text="Começar" />
                    </Link>
                </div>
            </section>
        </main>
    );
}