
const TiposBasicos = () => {

      const nombre: string = 'Santiago';

      const edad: number = 45;

      const estaActivo: boolean = true;

      const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];

      return (
            <>
                  <h3>Tipos basicos</h3>
                  {nombre}, {edad}, {(estaActivo) ? 'Activo': 'No activo'}
                  <br />
                  {poderes.join(', ')}
            </>
      )
}

export default TiposBasicos;