import React from 'react';
import BasicButtons from '@/components/Button/button';
import { handleClick } from '@/utils/msalHelper';


const LoginPage = () => {

  return (
    <div>
      <BasicButtons onClick={handleClick} />
    </div>
  );
};

export default LoginPage;
