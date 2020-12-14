import React from 'react';
import { connect } from 'react-redux';
import cancha from '../cancha.svg';

const Titulares = ({ titulares, quitarTitular }) => {
  return (
    <section>
      <h2>Titulares</h2>
      <div className="cancha">
        {titulares.map((jugador) => (
          <article className="titular" key={jugador.id}>
            <div>
              <img src={jugador.foto} alt={jugador.nombre} />
              <button onClick={() => quitarTitular(jugador)}>X</button>
            </div>
            <p>{jugador.nombre}</p>
          </article>
        ))}
        <img src={cancha} alt="canchaimg" />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  titulares: state.titulares,
});

const mapDispatchToProps = (dispatch) => ({
  quitarTitular(jugador) {
    dispatch({
      type: 'QUITAR_TITULAR',
      payload: jugador,
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
