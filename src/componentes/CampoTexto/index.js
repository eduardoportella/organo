import './index.css';

const CampoTexto = (props) => {
    return (
        <div className='campotexto'>
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    );
};

export default CampoTexto;