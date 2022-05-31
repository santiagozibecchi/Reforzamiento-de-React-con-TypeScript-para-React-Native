import useForm from '../hooks/useForm';

const Formularios = () => {

      const { email, password, onChange, formulario } = useForm({
            email: 'test@test.com',
            password: '123456'
      });

      return (
            <>
                  <h3>Formularios</h3>
                  <input
                        type='text'
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        // el valor de la caja de texto lo extraigo del evento onChange del HTML
                        // en el primero argumento ()
                        onChange={({ target }) => onChange(target.value, 'email')}
                  >
                  </input>

                  <input
                        type='text'
                        className="form-control mt-2 mb-2"
                        placeholder="Password"
                        value={password}
                        onChange={({ target }) => onChange(target.value, 'password')}
                  >
                  </input>

                  <code>
                        <pre>{JSON.stringify(formulario, null, 2)}</pre>
                  </code>
            </>
      )
}

export default Formularios;