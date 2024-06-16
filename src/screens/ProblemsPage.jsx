import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProblemsPage = () => {
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
          <h1 className='text-4xl mb-4'>ANÁLISIS DEL PROBLEMA</h1>
          <h2 className='text-2xl mb-4 mt-5'>LLUVIA DE IDEAS</h2>
        </div>
        <ul className='list-disc list-inside text-lg'>
          <li>Niños sin apoyo deportivo en la comunidad.</li>
          <li>Falta de recursos en el municipio.</li>
          <li>No hay existencia de un club de esta disciplina deportiva.</li>
          <li>Infraestructura inadecuada en los escenarios deportivos.</li>
          <li>Falta de personal profesional en el área deportiva.</li>
          <li>Falta de tiempo de los padres de familia.</li>
          <li>Poco interés en los niños.</li>
          <li>Pocos recursos de los padres.</li>
          <li>Falta de oferta de fútbol de salón en el municipio.</li>
        </ul>
        <h2 className='text-2xl mb-4 font-bold mt-5'>PROBLEMA PRINCIPAL</h2>
        <p className='text-lg'>
          No hay oferta en fútbol de salón para niños y niñas en el municipio de Betulia Antioquia.
        </p>
        <h2 className='text-2xl mb-4 font-bold mt-5'>EFECTOS</h2>
        <ul className='list-disc list-inside text-lg'>
          <li>No hay talentos deportivos en el futbol de salón.</li>
          <li>No hay buena representación en futbol de salón.</li>
          <li>Niños con pocas habilidades motrices básicas.</li>
        </ul>
        <h2 className='text-2xl mb-4 font-bold mt-5'>CAUSAS</h2>
        <ul className='list-disc list-inside text-lg'>
          <li>Falta de recursos en el municipio.</li>
          <li>No hay club de esta disciplina deportiva.</li>
          <li>No hay infraestructura en los escenarios deportivos.</li>
          <li>Falta de personal profesional en el área deportiva.</li>
          <li>Falta de oferta de fútbol de salón en el municipio.</li>
        </ul>
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

export default ProblemsPage;
