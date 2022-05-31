import useUsuarios from "../hooks/useUsuarios"
import { Usuario } from "../interfaces/reqRes"

const Usuarios = () => {

      const { usuarios, paginaSiguiente, paginaAnterior } = useUsuarios();

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
                        onClick={paginaAnterior}
                  >
                        Anteriores
                  </button>
                  &nbsp;
                  <button
                        onClick={paginaSiguiente}
                        className={"btn btn-primary"}
                  >
                        Siguientes
                  </button>
            </>
      )
}

export default Usuarios