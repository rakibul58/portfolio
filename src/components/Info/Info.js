import React from 'react';

const Info = () => {
    return (
        <div className='flex flex-wrap flex-col-reverse lg:flex-row items-center lg:justify-around gap-5 w-full my-20 pr-10 lg:pr-0 animate animatecss animatecss-backInUp px-4'>
            <div className='lg:w-1/2 mx-auto'>
                <h1 className='font-burtons text-2xl md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate animatecss hover:animatecss-rubberBand'>
                    <strong>About me</strong>
                </h1>
                <p className='font-poppins text-gray-600 animatecss hover:animatecss-rubberBand animate lg:text-xl mt-12'>
                    I am a front-end Developer looking for a great role in an IT company to work with various new and exciting technologies.
                </p>
                <p className='font-poppins text-gray-600 animatecss hover:animatecss-rubberBand animate lg:text-xl my-4 '>
                    I have been working with front-end development for six months. I have been coding for more than three years.
                </p>
                <p className='font-poppins text-gray-600 animatecss hover:animatecss-rubberBand animate lg:text-xl '>
                    I am curious person, the process of learning something new always excites me. I always look forward to work with something new this can be a new programming language or a new technology.
                </p>
            </div>
            <div className='lg:w-1/3 mx-auto'>
                <img className='w-full' src="https://i.ibb.co/ysq3vkq/10541562-18915856-removebg-preview.png" alt="" />
            </div>
        </div>
    );
};

export default Info;