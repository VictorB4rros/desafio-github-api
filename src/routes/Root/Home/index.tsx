import Button from '../../../components/Button';
import './styles.css';

export default function Home() {

    return (
        <main className="home-main">
            <section>
                <h1 className="home-title">Desafio Github API</h1>
                <p className="home-subtitle">DevSuperior - Escola de programação</p>
                <Button />
            </section>
        </main>
    );
}