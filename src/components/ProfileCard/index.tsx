import './styles.css';
import type { UserDTO } from '../../models/user';

type Props = {
    user: UserDTO;
}

export default function ProfileCard({ user }: Props) {
    return (
        <div className="container profile-container">
            <div className="picture-container">
                <img className="profile-pic" src={user.avatar_url} alt="Profile picture" />
            </div>
            <div className="profile-info-container">
                <p className="info-title">Informações</p>
                <div className="info-line mb-5">
                    <p className="info-key">Perfil:</p>
                    <p className="info-value-address">{user.url}</p>
                </div>
                <div className="info-line mb-5">
                    <p className="info-key">Seguidores:</p>
                    <p className="info-value">{user.followers}</p>
                </div>
                <div className="info-line mb-5">
                    <p className="info-key">Localidade:</p>
                    <p className="info-value">{user.location}</p>
                </div>
                <div className="info-line">
                    <p className="info-key">Nome:</p>
                    <p className="info-value">{user.name}</p>
                </div>
            </div>
        </div>
    );
}