const ButtonComponent = ({title, style}) => {
    return (
        <button style={{backgroundColor: 'blue',
                color: 'white',
                fontSize: '16px',
                padding: '10px 20px',
                margin: '5px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
}}>
            {title}
        </button>
    );
}

export default ButtonComponent;