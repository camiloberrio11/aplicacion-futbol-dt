import {
  QUITAR_SUPLENTE,
  QUITAR_TITULAR,
  AGREGAR_SUPLENTE,
  AGREGAR_TITULAR,
} from './types';

export const agregarTitular = (payload) => ({
  type: AGREGAR_TITULAR,
  payload,
});

export const agregarSuplente = (payload) => ({
  type: AGREGAR_SUPLENTE,
  payload,
});

export const quitarSuplente = (payload) => ({
  type: QUITAR_SUPLENTE,
  payload,
});


export const quitarTitular = (payload) => ({
  type: QUITAR_TITULAR,
  payload,
});

