import { useState } from "react"

// componente basado en clases
// class App extends Component{
//   state = { contador: 0}
//   incrementar = () => {
//     this.setState({contador: this.state.contador +1})
//   }

//   render(){
//     return (
//       <div>
//         Contador: {this.state.contador}
//         <button onClick={this.incrementar}> Incrementar </button>
//     </div>
//     )
//   }
// }

// componente basado en function
const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial)
  const incrementar = () => {
    setContador(contador + 1)
  }
  return [contador, incrementar]
}

const App = () => {
  const [contador, incrementar] = useContador(0)
  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}> Incrementar </button>
    </div>
  )
}

export default App

// Reglas de los hooks
// 1 Las reglas no se llaman en loops, ni condiciones debe ser al inicio del componente,
//   en lo mas alto
// 2 Solo se llaman en dos partes, componente de React o Custom hooks
// 3 Cuando se creen custom Hooks, comienzan con "use"