import { DateTime } from 'luxon';
import 'normalize.css';
import React, { PureComponent } from 'react';
import { v4 } from 'uuid';
import './App.css';
import { Pankot } from './components/Pankot/Pankot';

interface State {
  uuid: string;
}
export class App extends PureComponent<{}, State> {
  state: State = {
    uuid: v4(),
  };

  render() {
    return (
      <div className="App">
        <Pankot text={this.state.uuid} code="KeyQ" />
        <Pankot text={DateTime.utc().toISO()} code="KeyW" />
      </div>
    );
  }
}

export default App;
