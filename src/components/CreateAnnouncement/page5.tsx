import s from './Page5.module.css';
import {Title} from "../Title/Title.tsx";

export const Page5 = () => {
    return (
        <div className={s.conf}>
            <Title title={'Создание объявления'}/>
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
                            Текст объявления
                        </label>
                        <textarea className={s.textarea} name={'description'}/>
                    </div>
                    <div className={s.wrap}>
                        <p className={s.label}>
                            Преподователь: Каминник Андрей Алексеевич
                        </p>
                    </div>
                    <button className={s.btn}>Создать конференцию</button>
                </div>
            </form>
        </div>
    );
};

