import s from './Card.module.css';
import img from '../../assets/1.jpg';


export const Card = () => {
    return (
        <div className={s.card}>
            <div className={s.wrapper}>
                <img className={s.img} src={img} alt=""/>
                <div className={s.wrapper2}>
                    <div className={s.wrapperText}>
                        <p className={s.title}>Web-технологии</p>
                        <p className={s.theme}>Клиент-серверная архитектура</p>
                        <p className={s.text}>Web-технологии — это инструменты и методы для создания, управления и взаимодействия с веб-приложениями и сайтами через интернет. Включают HTML, CSS, JavaScript, серверные языки и frameworks.</p>
                        <div className={s.infoWrapper}>
                            <p className={s.name}>Ялунина Валерья Рамильева</p>
                            <div className={s.info}>
                                <p className={s.date}>21.04.2025</p>
                                <p className={s.time}>19:10</p>
                            </div>
                        </div>
                    </div>
                    <button className={s.btn}>Участвовать</button>
                </div>
            </div>
            <span className={s.count}>0/50</span>
        </div>
    );
};
