import React from 'react';
import Contador from './Contador'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { contadores : [] };
  }

  addContador = () => {
    this.setState({contadores: [...this.state.contadores, <Contador/>]})
  }

  render() {
    const { contadores} = this.state;
    return (
      <>
        <button onClick={this.addContador}>Añadir contador</button>
        {
          contadores.map(item => item)
        }
      </>
    );
  }

}

export default App;