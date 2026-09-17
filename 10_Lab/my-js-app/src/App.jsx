import Para from "./components/para.jsx";
import InputComponent from "./components/InputComponent.jsx";
import ButtonComponent from "./components/ButtonComponent.jsx";
import RadioBtn from "./components/RadioBtn.jsx";

function App() {
    return (
        <div>
            <Para
                styles={{ color: 'green', fontSize: '25px', fontWeight: 'bold' }}
                data="Login Page"
            />

            <InputComponent
                inputType="text"
                placeholder="Enter your username"
            />

            <br />

            <InputComponent
                inputType="password"
                placeholder="Enter your password"
            />

            <br />

            <ButtonComponent title="Submit" style={{ backgroundColor: 'red', color: 'white', fontSize: '16px', padding: '10px 20px',  }} />
            <br/>
            <ButtonComponent title="next" style={{ backgroundColor: 'blue', color: 'white', fontSize: '16px', padding: '10px 20px' }} />

            <RadioBtn />

        </div>

    );
}

export default App;