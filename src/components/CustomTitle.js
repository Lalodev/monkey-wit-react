import { useEffect } from 'react';

const CustomTitle = ({ children }) => {
  useEffect(() => {
    return () => {
      console.log('Desmontando título');
    };
  });

  return <h3>{children}</h3>;
};

export default CustomTitle;
