import { MainPage } from "components/auth/MainPage";
import "styles/general.css";

import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <MainPage />
            </BrowserRouter>
        </div>
    );
}

export default App;
