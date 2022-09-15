import './index.css';

const CampoTexto = (props) => {
    return (
        <div className='campotexto'>
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    );
};

export default CampoTexto;