import s from './Main.module.css';
import {AuthProvider} from "../auth-context/AuthProvider.tsx";



export const Main = () => {


    return <AuthProvider>
        <main className={s.main}>
            <main className={s.main}>

            </main>
        </main>
    </AuthProvider>
};
