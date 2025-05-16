// AuthContext.tsx
import { createContext, type ReactNode, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

// 1. Создаем тип для контекста
type AuthContextType = {
    isLoggedIn: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    user: User | null;
};

type User = {
    email: string;
    name?: string;
};

// 2. Создаем сам контекст
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 3. Создаем провайдер
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    // Функция входа
    const login = async (email: string, password: string) => {
        try {
            // Здесь должна быть реальная проверка с бэкендом
            // Для примера используем тестовые данные
            console.log(email, password);
            if (email === 'test@example.com' && password === 'test123') {
                setIsLoggedIn(true);
                setUser({ email, name: 'Test User' });
                navigate('/YourPage'); // Перенаправляем на страницу page3
            } else {
                throw new Error('Неверный email или пароль');
            }
        } catch (error) {
            console.error('Ошибка входа:', error);
            throw error;
        }
    };

    // Функция выхода
    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};

// 4. Создаем хук для удобного использования
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth должен использоваться внутри AuthProvider');
    }
    return context;
};

// 5. Пример компонента для входа
export const LoginForm = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Произошла ошибка');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Пароль:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit">Войти</button>
        </form>
    );
};

// 6. Пример защищенного компонента
export const ProtectedContent = () => {
    const { isLoggedIn, user, logout } = useAuth();

    if (!isLoggedIn) {
        return <div>Пожалуйста, войдите в систему</div>;
    }

    return (
        <div>
            <h2>Добро пожаловать, {user?.name || user?.email}!</h2>
            <button onClick={logout}>Выйти</button>
        </div>
    );
};