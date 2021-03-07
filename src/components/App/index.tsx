import React from 'react';
import { Button } from 'primereact/button';
import './App.css';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primeicons/primeicons.css';

interface Props {}
interface State {
  count: number;
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
        <div className="App">
          <Button label="PrimeReact" icon="pi pi-check" onClick={this.increment} />
          <p>Number of Clicks:{this.state.count}</p>
        </div>
    );
  }
}

export default App;
