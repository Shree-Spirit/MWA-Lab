const InputComponent=(props) => {
    return (
        <input
            style={{ color: 'black', fontSize: '20px', margin: '10px' }}
            type={props.inputType}
            placeholder={props.placeholder}
            
        />
    );
}

export default InputComponent;