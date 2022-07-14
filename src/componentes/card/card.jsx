import React from 'react';
import './Card.css'

const card = ({frase, fraseAleatoria}) => {
  return (
    <div className='tarjeta'>
        <h5 className='tarjeta-titulo'>Advice Slip #{frase.id}</h5>
        <p className='frase_api'> “{frase.advice}” </p>
        <div className='separador'>
            <hr />
            <div className="vertical"></div>
            <div className="vertical"></div>
            <hr />
        </div>
        <div className='button_frase' onClick={()=>{fraseAleatoria()}}>
            <img src="/images/icon-dice.svg" alt="device" />
        </div>
    </div>
  )
}

export default card