import {Container} from "../Container/Container.tsx";
import s from './menu.module.css';
import {useNavigate} from "react-router-dom";

export const Menu = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth={'900px'}>
            <div className={s.wrapper}>
                <button className={s.btn1} onClick={() => navigate('/CreateConf')}>
                    Создать конференцию
                </button>
                <button className={s.btn1} onClick={() => navigate('/CreateAnnouncement')}>
                    Создать объявление
                </button>
            </div>
            <button className={s.btn2}>
                Аналитика по конференция
            </button>
        </Container>
    );
};

