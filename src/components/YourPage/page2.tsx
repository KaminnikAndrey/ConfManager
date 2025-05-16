import {List} from "../List/List.tsx";
import {Title} from "../Title/Title.tsx";
import {Menu} from "../Menu/Menu.tsx";

export const Page2 = () => {
    return (
        <>
            <Title title={'Ваши конференции'}/>
            <Menu/>
            <List/>
        </>
    );
};

