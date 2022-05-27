import  './form-input.css';


const FormInput = ({heading, url, description}) =>  {
    return(
    <div className="formInput">
        <h2>{heading}</h2>
        <div className="imgForm">
            <img src={url}/>
        </div>
        <p>{description}</p>
    </div>
    );
}

export default FormInput;