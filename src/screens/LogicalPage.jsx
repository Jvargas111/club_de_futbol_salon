import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogicalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className='mx-48 my-16' style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
      <div className='text-center bg-white bg-opacity-70 p-8 rounded-lg shadow-lg'>
        <div className='font-bold mb-4'>
          <div className='flex justify-center mb-4'>
            <img src='/favicon.ico' alt='Escudo' width={180} />
          </div>
          <h1 className='text-4xl mb-4'>MARCO LÓGICO</h1>
          <div className='flex justify-center relative'>
            <img
              className='w-full max-w-full h-auto rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-110 hover:z-10 mt-5'
              src='/MarcoLogico.png'
              alt='Tree'
            />
          </div>
        </div>
        <div className='space-y-4 mx-32 mt-8'>
          <button
            className='w-full bg-blue-800 text-white py-2 rounded-lg text-2xl hover:bg-black transition-colors mx-2'
            onClick={() => navigate('/')}
          >
            REGRESAR A LA PAGINA PRINCIPAL
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogicalPage;
