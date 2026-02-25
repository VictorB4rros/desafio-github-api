import './styles.css';
import profilePic from '../../assets/profile-picture.png';

export default function ProfileCard() {
    return (
        <div className="container profile-container">
            <div className="picture-container">
                <img className="profile-pic" src={profilePic} alt="Profile picture" />
            </div>
            <div className="profile-info-container">
                <p className="info-title">Informações</p>
            </div>
        </div>
    );
}