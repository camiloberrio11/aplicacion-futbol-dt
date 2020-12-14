import { applyMiddleware, compose, createStore } from 'redux';
import jugadores from '../data/jugadores';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  jugadores,
  titulares: [],
  suplentes: [],
};

const reducerEntrenador = (state = initialState, action) => {
  switch (action.type) {
    case 'AGREGAR_TITULAR':
      return {
        ...state,
        titulares: state.titulares.concat(action.payload),
        jugadores: state.jugadores.filter(
          (jugador) => jugador.id !== action.payload.id
        ),
      };
    case 'AGREGAR_SUPLENTE':
      return {
        ...state,
        suplentes: state.suplentes.concat(action.payload),
        jugadores: state.jugadores.filter(
          (jugador) => jugador.id !== action.payload.id
        ),
      };
    case 'QUITAR_TITULAR':
      return {
        ...state,
        titulares: state.titulares.filter(
          (jugador) => jugador.id !== action.payload.id
        ),
        jugadores: state.jugadores.concat(action.payload),
      };
      case 'QUITAR_SUPLENTE':
        return {
          ...state,
          suplentes: state.suplentes.filter(
            (jugador) => jugador.id !== action.payload.id
          ),
          jugadores: state.jugadores.concat(action.payload),
        };

    default:
      return state;
  }
};

export default createStore(reducerEntrenador, initialState, composeEnhancers());

// Recibe funcion reductora como primer parametro
