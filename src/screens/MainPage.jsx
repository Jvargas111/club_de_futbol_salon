import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
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
          <h1 className='text-4xl mb-4'>CLUB DE FÚTBOL DE SALÓN NIÑOS Y NIÑAS ENTRE LOS 6-10 AÑOS</h1>
          <h2 className='text-2xl mb-4'>INTRODUCCION</h2>
        </div>
        <p className='text-lg'>
          Con el propósito de fomentar el desarrollo integral de la niñez en el municipio de Betulia, nos complace
          presentar un proyecto innovador: la creación de un club deportivo de fútbol de salón destinado a niños y niñas
          de entre 6 y 10 años. Este proyecto no solo busca promover la práctica deportiva, sino también brindar nuevas
          alternativas y apoyo a la comunidad local. A través de la enseñanza de conocimientos, técnicas y ejercicios
          especializados, nuestro objetivo es contribuir al óptimo desarrollo deportivo de los participantes, al mismo
          tiempo ocupamos su tiempo libre de manera constructiva. Creemos firmemente que esta iniciativa no solo
          impulsará la progresión deportiva de los niños, sino que también tendrá un impacto positivo en su vida diaria,
          fomentando valores como el trabajo en equipo, la disciplina y el bienestar físico y emocional. ¡Juntos,
          construyamos un futuro brillante para la juventud de Betulia a través del deporte y la formación integral!
        </p>
        <div className='font-bold mb-4 mt-5'>
          <h2 className='text-2xl mb-4 uppercase'> Estos botones te llevaran a conocer más sobre esto! </h2>
        </div>
        <div className='space-y-4 mx-32 mt-8'>
          <button
            className='w-full bg-blue-800 text-white py-2 rounded-lg text-2xl hover:bg-black transition-colors'
            onClick={() => navigate('/Presentacion')}
          >
            PRESENTACIÓN DE LA IDEA
          </button>
          <button
            className='w-full bg-blue-800 text-white py-2 rounded-lg text-2xl hover:bg-black transition-colors'
            onClick={() => navigate('/Analisis')}
          >
            ANÁLISIS DE INVOLUCRADOS Y SUS FUNCIONES
          </button>
          <button
            className='w-full bg-blue-800 text-white py-2 rounded-lg text-2xl hover:bg-black transition-colors'
            onClick={() => navigate('/AnalisisProblema')}
          >
            ANÁLISIS DEL PROBLEMA
          </button>
          <button
            className='w-full bg-blue-800 text-white py-2 rounded-lg text-2xl hover:bg-black transition-colors'
            onClick={() => navigate('/ArbolObjetivos')}
          >
            ÁRBOL DE OBJETIVOS
          </button>
          <button
            className='w-full bg-blue-800 text-white py-2 rounded-lg text-2xl hover:bg-black transition-colors'
            onClick={() => navigate('/MarcoLogico')}
          >
            MARCO LÓGICO
          </button>
          <div className='font-bold mb-4 mt-8'>
            <h2 className='text-2xl mb-4'>IMÁGENES</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              <div className='flex justify-center relative'>
                <img
                  className='w-full h-auto rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-150 hover:z-10'
                  src='/1.png'
                  alt='1'
                />
              </div>
              <div className='flex justify-center relative'>
                <img
                  className='w-full h-auto rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-150 hover:z-10'
                  src='/2.png'
                  alt='2'
                />
              </div>
              <div className='flex justify-center relative'>
                <img
                  className='w-full h-auto rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-150 hover:z-10'
                  src='/3.png'
                  alt='3'
                />
              </div>
              <div className='flex justify-center relative'>
                <img
                  className='w-full h-auto rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-150 hover:z-10'
                  src='/4.png'
                  alt='4'
                />
              </div>
              <div className='flex justify-center relative'>
                <img
                  className='w-full h-auto rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-150 hover:z-10'
                  src='/5.png'
                  alt='5'
                />
              </div>
              <div className='flex justify-center relative'>
                <img
                  className='w-full h-auto rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-150 hover:z-10'
                  src='/6.png'
                  alt='6'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8 font-bold'>
          <h1 className='mb-4 text-2xl'>CONTACTOS</h1>
          <h3 className='mb-4'>Juan Pablo Caro Fernández - 3195314924</h3>
          <h3 className='mb-4'>Mateo Madrid - 3503436921</h3>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
