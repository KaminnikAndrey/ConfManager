import s from './List.module.css';
import {Card} from "../Card/Card.tsx";
import {Container} from "../Container/Container.tsx";

export const List = () => {
    return (
        <div className={s.list}>
            <Container maxWidth={'870px'}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <button className={s.btn}>Показать еще</button>
            </Container>
        </div>
    );
};
