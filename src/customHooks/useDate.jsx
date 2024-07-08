import { useState } from 'react';

const useDate = () => {
  const [date, setDate] = useState(new Date());
  const dateUpdater = () => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  };

  return [date, dateUpdater];
};

export default useDate;

//Para obtener una fecha en JavaScript podemos utilizar new Date()
