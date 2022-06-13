import App from "app/App";
import store from "app/store";
import { CookiesProvider } from "react-cookie";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <CookiesProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </CookiesProvider>
);
