import { useState } from "react";
import "./App.css";
import Main from "./components/Main";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div className={darkMode ? "dark" : ""}>
            <Main handleDarkMode={handleDarkMode} />
        </div>
    );
}

export default App;
