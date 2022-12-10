import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (

        <div className='flex flex-wrap items-center lg:justify-around gap-10 w-full my-20 pr-10 lg:pr-0 animate animatecss animatecss-backInDown px-4'>
            <div className='lg:w-1/2 mx-auto'>
                <h1 className='font-poppins text-2xl md:text-4xl lg:text-6xl cursor-pointer text-secondary-content animate animate-pulse animatecss hover:animatecss-rubberBand'>
                    Hi, I am <br />
                    <span className='font-burtons text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'><strong>Muhammed Rakibul Hasan</strong></span> <br />
                    Front-End Developer
                </h1>
                <a className='btn btn-primary mt-6 bg-gradient-to-tr from-primary to-secondary animate animate-pulse animatecss hover:animatecss-rubberBand text-white font-bold font-burtons mr-5' href="https://drive.google.com/uc?id=1yl4dJiD5b0ghwc6XZQ3DOlY-VvNgRCBR&export=download" download>Download Resume</a>
                <Link to='/projects' className='btn btn-primary bg-gradient-to-tr from-secondary to-primary text-white mt-6 animate animate-pulse animatecss hover:animatecss-rubberBand font-burtons'>Go to Projects</Link>
            </div>
            <div className='lg:w-1/3'>
                <img className='animate animate-pulse hover:animate-spin w-full lg:w-2/3 p-5 border rounded-full bg-gradient-to-tr from-primary to-secondary' src="https://i.ibb.co/rdyhVCr/1659429560757-removebg-preview-removebg-preview.jpg" alt="" />
            </div>
        </div>

    );
};

export default Home;