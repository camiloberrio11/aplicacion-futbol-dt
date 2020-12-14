import {
  QUITAR_SUPLENTE,
  QUITAR_TITULAR,
  AGREGAR_SUPLENTE,
  AGREGAR_TITULAR,
} from './types';

const reducerEntrenador = (state = {}, action) => {
  switch (action.type) {
    case AGREGAR_TITULAR:
      return {
        ...state,
        titulares: state.titulares.concat(action.payload),
        jugadores: state.jugadores.filter(
          (jugador) => jugador.id !== action.payload.id
        ),
      };
    case AGREGAR_SUPLENTE:
      return {
        ...state,
        suplentes: state.suplentes.concat(action.payload),
        jugadores: state.jugadores.filter(
          (jugador) => jugador.id !== action.payload.id
        ),
      };
    case QUITAR_TITULAR:
      return {
        ...state,
        titulares: state.titulares.filter(
          (jugador) => jugador.id !== action.payload.id
        ),
        jugadores: state.jugadores.concat(action.payload),
      };
    case QUITAR_SUPLENTE:
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

export default reducerEntrenador;
