import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PresentationPage = () => {
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
          <h1 className='text-4xl mb-4'>PRESENTACIÓN DE LA IDEA</h1>
          <h2 className='text-2xl mb-4 mt-5'>ESCENARIO</h2>
        </div>
        <p className='text-lg'>
          Esta dirigido al escenario deportivo, Dado que los niños se prepararán y desarrollarán capacidades físicas en
          función de la práctica de un deporte especifico. Donde aprenderán, experimentaran, competirán y desarrollaran
          una sana convivencia en la comunidad. “El juego como papel fundamental de la sociedad “(Johan Huizinga).
        </p>
        <h2 className='text-2xl mb-4 font-bold mt-5'>ENFOQUE</h2>
        <p className='text-lg'>
          El enfoque del proyecto está basado en la formación deportiva, Trabajando en el deporte del fútbol de salón.
          Ayudando y guiando a niños a realizar actividad física y que sean conscientes de lo importante de tener un
          habitó saludable y que disfruten en su niñez.
        </p>
        <h2 className='text-2xl mb-4 font-bold mt-5'>EXPECTATIVA</h2>
        <p className='text-lg'>
          Fomentar la actividad física y el trabajo en equipo entre los niños, promover valores como el compañerismo y
          la disciplina, desarrollar habilidades deportivas en un ambiente seguro y divertido, y contribuir al bienestar
          y desarrollo integral de los participantes. Además, generar un sentido de pertenencia en la comunidad y
          potenciar el talento deportivo local.
        </p>
        <h2 className='text-2xl mb-4 font-bold mt-5'>SECTOR POBLACIONAL</h2>
        <p className='text-lg'>Niños y niñas entre los 6-10 años de la zona urbana del municipio de Betulia ANT.</p>
        <div>
          <h2 className='text-2xl mb-4 font-bold mt-5'>UBICACIÓN</h2>
          <p className='text-lg'>Municipio de Betulia ANT.</p>
          <div className='flex justify-center relative'>
            <img
              className='w-full max-w-2xl h-auto rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 hover:z-10 mt-5'
              src='/Betulia.png'
              alt='Betulia'
            />
          </div>
          <div className='flex justify-center relative'>
            <img
              className='w-full max-w-xs h-auto rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 hover:z-10 mt-5'
              src='/Mapa.png'
              alt='Betulia'
            />
          </div>
        </div>
        <h2 className='text-2xl mb-4 font-bold mt-5'>PREGUNTA PROBLEMA</h2>
        <p className='text-lg'>
          ¿Cuál sería la estructuración de un programa formativo en el municipio de Betulia en niños y niñas entre los
          6-10 años en fútbol de salón?
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

export default PresentationPage;
