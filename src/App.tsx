import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page1 } from "./components/Page1/page1.tsx";
import { Page2 } from "./components/YourPage/page2.tsx";
import { Page3 } from "./components/LoginPage/page3.tsx";
import { Page4 } from "./components/CreateConf/page4.tsx";
import { Page5 } from "./components/CreateAnnouncement/page5.tsx";
import {MainLayout} from "./components/MainLayout/MainLayout.tsx";
import {AuthProvider} from "./components/auth-context/AuthContext.tsx";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Page1 />} />
                        <Route path="page1" element={<Page1 />} />
                        <Route path="YourPage" element={<Page2 />} />
                        <Route path="LoginPage" element={<Page3 />} />
                        <Route path="CreateConf" element={<Page4 />} />
                        <Route path="CreateAnnouncement" element={<Page5 />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;