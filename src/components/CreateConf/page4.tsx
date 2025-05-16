import s from './Page4.module.css';
import {Title} from "../Title/Title.tsx";

export const Page4 = () => {
    return (
        <div className={s.conf}>
            <Title title={'Создание конференции'}/>
            <form className={s.form} action="#">
                <div className={s.wrapper}>
                    <div className={s.wrap}>
                        <label className={s.label} htmlFor="theme">
                            Тема конференции
                        </label>
                        <input className={s.input} type="text" name={'theme'}/>
                    </div>
                    <div className={s.wrap}>
                        <label className={s.label} htmlFor="category">
                            Категория
                        </label>
                        <input className={s.input2} type="text" placeholder={'Все категории ...'} name={'category'}/>
                    </div>
                    <div className={s.wrap}>
                        <label className={s.label} htmlFor="description">
                            Тема конференции
                        </label>
                        <textarea className={s.textarea} name={'description'}/>
                    </div>
                    <div className={s.wrap}>
                        <p className={s.label}>
                            Преподователь: Каминник Андрей Алексеевич
                        </p>
                    </div>
                    <div className={s.wrap}>
                        <div className={s.flex}>
                            <label className={s.label} htmlFor="date">
                                Дата:
                            </label>
                            <input className={s.input3} type="date" placeholder={'дд.мм.гггг'} name={'date'}/>
                        </div>
                    </div>
                    <div className={s.wrap}>
                        <div className={s.flex}>
                            <label className={s.label} htmlFor="time">
                                Время:
                            </label>
                            <input className={s.input3} type="text" placeholder={'00 : 00'} name={'time'}/>
                        </div>
                    </div>
                    <div className={s.wrap}>
                        <div className={s.flex}>
                            <label className={s.label} htmlFor="limit">
                                Лимит участников:
                            </label>
                            <input className={s.input3} type="text" placeholder={'50'} name={'limit'}/>
                        </div>
                    </div>
                    <div className={s.wrap}>
                        <label className={s.label} htmlFor="link">
                            Ссылка на конференцию
                        </label>
                        <input className={s.input} type="text" name={'link'}/>
                    </div>
                    <button className={s.btn}>Создать конференцию</button>
                </div>
            </form>
        </div>
    );
};

