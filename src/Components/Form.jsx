import React from "react";
import ErrorMessage from "./ErrorMessage";


const Form = () => {
  
  const [usuario, setUsuario]= useState({
    nombre: "",
    email: ""

});
const [information, setInformation] = useState(false)
const [error, setError] = useState (false)
const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(usuario.nombre.trim().length >5 && regex.test(usuario.email)){
        setInformation(true)
        setError(false)
    }else {
        setError(true)
    }
};
  

  return (
    <div>
    <form onSubmit={handleSubmit}>
     
       <label>Nombre completo</label>
       <input type="text" onChange={(event) => setUsuario({...usuario, nombre: event.target.value})} />
       <label>Correo electronico</label>
       <input type="text" onChange={(event) => setUsuario({...usuario, email: event.target.value})} />
       <button>Enviar</button>

   </form>
      {information && <h3>Gracias {usuario.nombre}, te contactaremos cuando antes vía mail</h3>}
      {error && <ErrorMessage/>}
   
</div>
  );
};

export default Form;



