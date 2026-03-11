import Button from '../../../components/Button';
import ProfileCard from '../../../components/ProfileCard';
import './styles.css';

export default function Find() {

    return (
        <main className="find-main">
            <section>
                <div className="container find-container">
                    <div className="find-title-container">
                        <h1 className="find-title">Encontre um perfil Github</h1>
                    </div>
                    <div className="input-container">
                        <input
                            className="find-input"
                            name="githubUser"
                            type="text"
                            placeholder="Usuário Github"
                        />
                    </div>
                    <div>
                        <Button text="Encontrar"/>
                    </div>
                </div>
                <ProfileCard />
            </section>
        </main>
    );
}