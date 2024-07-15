import React from 'react';
import HomePageImage from '../Images/image.png';
import styled from 'styled-components';
const HomeContainer = styled.div`
  background-color:#cccfcf;
  height: 100vh;
`;


const Home = () => {
  return (
    <HomeContainer>
    <div className='flex flex-col md:flex-row w-full h-full justify-center items-center'>
      <div className='md:w-1/2 flex flex-col justify-center items-center text-center p-6'>
        <h1 className='text-4xl md:text-5xl leading-tight text-white font-bold mb-6'>
          Welcome to the Shipment Delivery Application
        </h1>
        <p className='text-lg  mb-8'>
        "Empowering Logistics Excellence: Track, Manage, and Deliver with Precision and Ease, Anywhere in the World."
        </p>
      </div>
      <div className='md:w-1/2 p-6'>
        <img
          src={HomePageImage}
          alt='Shipping Cargo'
          className='rounded-lg shadow-xl mx-auto'
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </div>
    </HomeContainer>
  );
};

export default Home;
