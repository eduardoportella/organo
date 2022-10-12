import './index.css';

const CampoTexto = (props) => {

    let valor = '';

    const aoDigitado = (evento) => {
        valor = evento.target.value;
        console.log(valor);
    };

    return (
        <div className='campotexto'>
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    );
};

export default CampoTexto;