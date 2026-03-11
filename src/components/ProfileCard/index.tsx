import './styles.css';
import profilePic from '../../assets/profile-picture.png'

export default function ProfileCard() {
    return (
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
    );
}