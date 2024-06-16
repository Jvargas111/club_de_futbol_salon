import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AnalysisPage = () => {
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
          <h1 className='text-4xl mb-4'>ANÁLISIS DE INVOLUCRADOS Y SUS FUNCIONES</h1>
          <h2 className='text-2xl mb-4 mt-5'>ENTRENADORES</h2>
        </div>
        <p className='text-lg'>Participar en la formación de los asociados por el club. </p>
        <h2 className='text-2xl mb-4 font-bold mt-5'>COMUNIDAD EN GENERAL</h2>
        <p className='text-lg'>Participar en el club. </p>
        <h2 className='text-2xl mb-4 font-bold mt-5'>ENTE DEPORTIVO DEL MUNICIPIO</h2>
        <p className='text-lg'>
          Brindar espacios donde el club pueda entrenar. Coliseos, placas, parque educativo. 
        </p>
        <h2 className='text-2xl mb-4 font-bold mt-5'>NIÑOS Y NIÑAS QUE SE ASOCIARAN</h2>
        <p className='text-lg'>Compromiso y disposición en la asistencia de las clases.</p>
        <h2 className='text-2xl mb-4 font-bold mt-5'>PADRES DE FAMILIA DE LOS NIÑOS</h2>
        <p className='text-lg'>Acompañamiento de los niños en los entrenamientos.</p>
        <h2 className='text-2xl mb-4 font-bold mt-5'>EMPRESAS QUE SE ASOCIEN AL CLUB</h2>
        <p className='text-lg'>
          Empresa del municipio llamada COPESUR que se involucrara en el proyecta ayudando de manera económica.
        </p>
        <div className='space-y-4 mx-32 mt-8'>
          <button
            className='w-full bg-blue-800 text-white py-2 rounded-lg text-2xl hover:bg-black transition-colors'
            onClick={() => navigate('/')}
          >
            REGRESAR A LA PAGINA PRINCIPAL
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
