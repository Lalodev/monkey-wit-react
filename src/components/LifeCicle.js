import { useEffect, useState } from 'react';
import CustomTitle from './CustomTitle';

const LifeCicle = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log('sin dependencias');
  });

  useEffect(() => {
    console.log('con dependencia vacia');
  }, []);

  useEffect(() => {
    console.log('con dependencia');
  }, [visible]);

  const handleShowTitle = () => {
    setVisible(!visible);
  };

  return (
    <>
      {visible ? <CustomTitle>Life Cycle - UseEffect</CustomTitle> : null}
      <button onClick={handleShowTitle}>Show title</button>
    </>
  );
};

export default LifeCicle;
