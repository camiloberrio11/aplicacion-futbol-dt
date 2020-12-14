import { compose, createStore } from 'redux';
import jugadores from '../data/jugadores';
import reducerEntrenador from './reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  jugadores,
  titulares: [],
  suplentes: [],
};

export default createStore(reducerEntrenador, initialState, composeEnhancers());

// Recibe funcion reductora como primer parametro
