import "styles/general.css";
import { MainPage } from "components/home/MainPage";

import React from "react";
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
