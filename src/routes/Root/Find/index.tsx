import profilePic from '../../../assets/profile-picture.png'
import Button from '../../../components/Button';
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
                        <Button />
                    </div>
                </div>
                <div className="container profile-container">
                    <div className="picture-container">
                        <img className="profile-pic" src={profilePic} alt="Profile picture" />
                    </div>
                    <div className="profile-info-container">
                        <p className="info-title">Informações</p>
                        <div className="info-line mb-5">
                            <p className="info-key">Perfil:</p>
                            <p className="info-value-address">https://api.github.com/users/acenelio</p>
                        </div>
                        <div className="info-line mb-5">
                            <p className="info-key">Seguidores:</p>
                            <p className="info-value">4379</p>
                        </div>
                        <div className="info-line mb-5">
                            <p className="info-key">Localidade:</p>
                            <p className="info-value">Brasil</p>
                        </div>
                        <div className="info-line">
                            <p className="info-key">Nome:</p>
                            <p className="info-value">Nelio Alves</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}