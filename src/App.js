import logo from "./logo.svg";
import "./App.css";
import HomePages from "./pages/HomePages";
import LoginPage from "./pages/LoginPage";
import RegisPage from "./pages/RegisPage";

import Router from "./router/Router";
import { AnimatePresence } from "framer-motion";
import ContentContextProvider from "./contexts/ContentContext";

function App() {
    return (
        <>
            <ContentContextProvider>
                <AnimatePresence>
                    <Router />
                </AnimatePresence>
            </ContentContextProvider>
        </>
    );
}

export default App;
