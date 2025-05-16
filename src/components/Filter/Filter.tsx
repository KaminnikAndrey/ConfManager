import {Container} from "../Container/Container.tsx";
import search from '../../assets/search.svg';
import calender from '../../assets/calendar.svg';
import s from './Filter.module.css';

export const Filter = () => {
    return (
        <Container maxWidth={'900px'}>
            <div className={s.wrapper}>
                <input className={s.input} type="text" placeholder={'Все категории ...'}/>
                <input className={s.input} type="text" placeholder={'Предмет'}/>
                <input className={s.input} type="text" placeholder={'Преподаватель'}/>
                <input className={s.input} type="text" placeholder={'Тема'}/>
                <div className={s.wrapper2}>
                    <button><img src={calender} alt="calendar" width={40} height={40}/></button>
                    <button><img src={search} alt="search" width={34} height={34}/></button>
                </div>
            </div>
        </Container>
    );
};
