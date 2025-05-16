import {Container} from "../Container/Container.tsx";
import s from './Header.module.css';
import logoUrl from '../../assets/ConfManager.svg';

import {useNavigate} from "react-router-dom";
import {useAuth} from "../auth-context/AuthContext.tsx";

export const Header = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    return (
        <header className={s.header}>
            <Container>
                <div className={s.wrapper}>
                    <img src={logoUrl} alt="ConfManager"/>
                    {isLoggedIn ? <p className={s.username}>Каминник Андрей</p> : <button className={s.btn} onClick={() => navigate('/LoginPage')}>Login</button>}
                </div>
            </Container>
        </header>
    );
};
