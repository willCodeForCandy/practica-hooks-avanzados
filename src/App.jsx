import { useEffect, useState } from 'react';
import './_App.scss';
import Calculator from './components/Calculator/Calculator';
import useDate from './customHooks/useDate';
import Timer from './components/Timer/Timer';

function App() {
  const [date, setDate] = useDate();
  useEffect(() => {
    setDate();
  }, []);

  return (
    <>
      <Timer date={date} />
      <Calculator />
    </>
  );
}

export default App;

//En el componente App.jsx vamos a tener obligatoriamente el uso de un customHook, este customHook se irá actualizando cada segundo, obtendrá la fecha actual y la guardará, posteriormente utilizaremos la respuesta de ese estado del customHook para enviárselo a un componente hijo de App mediante props, se puede llamar Timer y este únicamente recibirá la fecha y la pintará.

//Para utilizar un formato de horas:minutos:segundos podemos utilizar el método .toLocaleTimeString() al pintar el dato utilizando el estado donde está guardada la información de new Date()
