import './css/main.css'
import {createRoot} from "react-dom/client";
import {Provider} from "./provider";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider/>
)