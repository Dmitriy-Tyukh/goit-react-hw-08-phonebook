import React from 'react';
import { WraperSpiner } from './Spiner.moduled';
import { Oval } from 'react-loader-spinner';

export const Spiner = () => {
  return (
    <WraperSpiner>
      <Oval
        height={40}
        width={40}
        color="#8b8b8b"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#8b8b8b"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </WraperSpiner>
  );
};
