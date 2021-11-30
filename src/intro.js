const impura = () => new Date().toLocaleString()

console.log(impura())
// function impura es aquella que lo que devuelve no es Constante
// bases de datos se consideran funcuiones impuras
// en react todos son funciones impuras
// funcion pura nunca cambia el valor de retorno

const MiComponente = ({ miProp }) => {
  return (
    <div>
      Nombre: {miProp}
    </div>
  )
}

const App = () => {
  return(
    <MiComponente miProp={'chancho feliz'} />
  )
}

export default App
