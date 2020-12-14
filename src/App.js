import React from 'react';
import { Provider } from 'react-redux';
import EquipoSeleccionado from './components/EquipoSeleccionado';
import Jugadores from './components/Jugadores';
import store from './redux/store';
import './styles/styles.scss';

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Director técnico</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
);

export default App;
