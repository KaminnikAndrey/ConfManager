import { Outlet } from "react-router-dom";
import {Header} from "../Header/Header.tsx";

export const MainLayout = () => {
    return (
        <div>
            <Header/>
            {/* Здесь может быть общий заголовок/меню */}
            <Outlet /> {/* Здесь будут отображаться страницы */}
        </div>
    );
};