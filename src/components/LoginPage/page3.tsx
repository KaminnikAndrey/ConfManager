import s from './Page3.module.css';
import { useState } from 'react';
import {useAuth} from "../auth-context/AuthContext.tsx";

export const Page3 = () => {
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const correctCredentials = {
        email: 'test@example.com',
        password: 'test123'
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Нормализация данных перед сравнением
        const enteredEmail = formData.email.trim().toLowerCase();
        const enteredPassword = formData.password.trim();

        const correctEmail = correctCredentials.email.toLowerCase();
        const correctPassword = correctCredentials.password;
        if (enteredEmail === correctEmail && enteredPassword === correctPassword) {
            login(enteredEmail, enteredPassword);
            alert('Вход выполнен успешно!');

            // Очистка формы после успешного входа
            setFormData({
                email: '',
                password: ''
            });
        } else {
            alert(`Неверный email или пароль. Введено: ${enteredEmail}:${enteredPassword}`);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className={s.container}>
            <form className={s.form} onSubmit={handleSubmit}>
                <div className={s.wrapper}>
                    <h3 className={s.title}>Авторизация</h3>

                    <div className={s.wrap}>
                        <label className={s.label} htmlFor="email">Email</label>
                        <input
                            className={s.input}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className={s.wrap}>
                        <label className={s.label} htmlFor="password">Пароль</label>
                        <input
                            className={s.input}
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <button type="submit" className={s.btn} onClick={handleSubmit}>Войти</button>
                </div>
            </form>
        </div>
    );
};