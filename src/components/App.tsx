import { BrowserRouter } from "react-router-dom";
import Router from "../router/Router";


function App() {
    const createButton = (window as any).createButton;
    
    const buttons = [];
    buttons[0] = createButton("кнопочка");
    buttons[1] = createButton("кнопчка");
    buttons[2] = createButton("кнпчк");

    return (
        <BrowserRouter>
            <button>{buttons[0].text}</button>
            <button>{buttons[1].text}</button>
            <button>{buttons[2].text}</button>
            
            <Router />
        </BrowserRouter>
    );
}

export default App;