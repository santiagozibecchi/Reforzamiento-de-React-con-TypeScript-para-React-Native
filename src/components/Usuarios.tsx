import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqResListado, Usuario } from '../interfaces/reqRes';

const Usuarios = () => {

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
                        // params => ? page = 1, 2, ...
                        page: paginaRef.current // .current es la refencia al valor que contiene 1
                  }
            });
            if (resp.data.data.length > 0) {
                  setUsuarios(resp.data.data);
                  paginaRef.current++
            } else {
                  alert('No hay mas registros')
            }
      }

      const rederItem = ({ id, first_name, last_name, email, avatar }: Usuario) => {
            return (
                  <tr key={id.toString()}>
                        <td>
                              <img
                                    src={avatar}
                                    alt='avatar-img'
                                    style={{
                                          width: 35,
                                          borderRadius: 100
                                    }}
                              ></img>
                        </td>
                        <td>{first_name} {last_name}</td>
                        <td>{email}</td>
                  </tr>
            )
      }

      return (
            <>
                  <h3>Usuarios:</h3>
                  <table className="table">
                        <thead>
                              <tr>
                                    <th>Avatar</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                              </tr>
                        </thead>
                        <tbody>
                              {
                                    // usuarios.map(usuario => rederItem(usuario) )
                                    usuarios.map(rederItem)
                              }
                        </tbody>
                  </table>

                  <button
                        className="btn btn-primary"
                        onClick={cargarUsuarios}
                  >
                        Siguientes
                  </button>
            </>
      )
}

export default Usuarios