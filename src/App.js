import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './componentes/card/card.jsx';
import { Audio } from  'react-loader-spinner';

function App() {
  const [frase, setFrase] = useState({
    advice: '',
    id: 0,
  });
  const [aviso, setAviso] = useState(true);

  useEffect(()=>{
    fraseAleatoria();
  },[]);

  const fraseAleatoria = async() => {
    try {
      setAviso(true);
      const url = 'https://api.adviceslip.com/advice';
      const respuesta = await axios.get(url);
      setFrase({advice: respuesta.data.slip.advice, id: respuesta.data.slip.id});
      setAviso(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contenedor">
      {aviso ? <Audio
    height="100"
    width="100"
    color='#52ffa8'
    ariaLabel='loading'
  /> : <Card frase = {frase} fraseAleatoria ={fraseAleatoria} />} 
    </div>
  );
}

export default App;
