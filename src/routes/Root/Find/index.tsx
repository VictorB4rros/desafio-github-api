import ProfileCard from '../../../components/ProfileCard';
import './styles.css';
import { useEffect, useState } from 'react';
import type { UserDTO } from '../../../models/user';
import * as userService from '../../../services/user-service';

type FormData = {
    username: string
}

export default function Find() {

    const [username, setUsername] = useState<string>("");

    const [formData, setFormData] = useState<FormData>({
        username: ''
    });

    const [user, setUser] = useState<UserDTO>();

    useEffect(() => {
        if (username !== "") {
            userService.findUser(username)
            .then(response => {
                setUser(response.data);
            })
            .catch(() => {;
                console.log("Usuário não encontrado");
                setUser(undefined);
            });
        }
    }, [username]);

    function handleInputChange(event: any) {
        const username = event.target.value;
        setFormData({ ...formData, username: username });
    }

    function handleFormSubmit(event: any) {
        event.preventDefault();
        setUsername(formData.username);
    }

    return (
        <main className="find-main">
            <section>
                <div className="container find-container">
                    <div className="find-title-container">
                        <h1 className="find-title">Encontre um perfil Github</h1>
                    </div>
                    <div className="input-container">
                        <form onSubmit={handleFormSubmit}>
                            <input
                                className="find-input mb-20"
                                name="username"
                                value={formData.username}
                                type="text"
                                placeholder="Usuário Github"
                                onChange={handleInputChange}
                            />
                            <div>
                                <button type="submit" className="find-button">Encontrar</button>
                            </div>
                        </form>
                    </div>

                </div>
                {
                    username &&
                    (user ? <ProfileCard user={user} /> : <h1 className="find-title container">Erro ao buscar usuário</h1>)
                }

            </section>
        </main>
    );
}