import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

const useUsuarios = () => {

      const [usuarios, setUsuarios] = useState<Usuario[]>([]);

      // Cuando cambia la pagina no es necesario renderizar todo el documento HTML
      // por lo cual esto se puede manejar como una referencia

      // El useRef cuando cambie su valor es como una referencia a una variable la cual 
      // si cambia su valor, sigue siendo la misma pero no va a disparar el procedimiento 
      // para renderizar el componente
      const paginaRef = useRef(0) // cuando el componente se vuelve a cargar tiene el valor de 1

      useEffect(() => {
            // Llamado al API
            cargarUsuarios();
      }, []);

      const cargarUsuarios = async () => {
            const resp = await reqResApi.get<ReqResListado>('/users', {
                  params: {
                        // params => ? page = 0, 1, ...
                        page: paginaRef.current // .current es la refencia al valor que contiene 1
                  }
            });

            return setUsuarios(resp.data.data);
      }

      const paginaSiguiente = () => {
            if (paginaRef.current < 2) {
                  paginaRef.current++
                  cargarUsuarios();
            } else {
                  alert('No hay mas usuarios')
            }
      }
      const paginaAnterior = () => {
            if (paginaRef.current > 1) {
                  paginaRef.current--;
                  cargarUsuarios();
            } else {
                  alert('No hay mas usuarios')
            }
      }

      return {
            usuarios,
            paginaSiguiente,
            paginaAnterior
      }

}

export default useUsuarios;