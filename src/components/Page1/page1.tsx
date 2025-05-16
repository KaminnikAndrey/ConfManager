import {Filter} from "../Filter/Filter.tsx";
import {List} from "../List/List.tsx";
import s from '../Main/Main.module.css';


export const Page1 = () => {
    return (
        <>
            <main className={s.main}>
                <Filter/>
                <List/>
            </main>

        </>
    );
};

