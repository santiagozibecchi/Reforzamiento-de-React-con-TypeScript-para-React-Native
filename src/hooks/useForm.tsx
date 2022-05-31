import { useState } from "react";

const useForm = <T extends Object>(formulario: T) => {

      const [state, setState] = useState(formulario)

      // const { email, password } = formulario;

      // value => valor de la caja de texto
      const onChange = (value: string, campo: keyof T) => {
            setState({
                  ...state,
                  // computar el valor de la variable campo => propiedad del objeto que 
                  // quiero establecer
                  [campo]: value
            });
      }

      return {
            onChange,
            ...state,
            formulario: state
      }
}

export default useForm;