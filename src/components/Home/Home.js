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
                <a className='btn btn-primary mt-6 bg-gradient-to-tr from-primary to-secondary animate animate-pulse animatecss hover:animatecss-rubberBand text-secondary-content font-bold font-burtons mr-5' href="https://drive.google.com/uc?id=1yl4dJiD5b0ghwc6XZQ3DOlY-VvNgRCBR&export=download" download>Download Resume</a>
                <Link to='/projects' className='btn btn-primary bg-gradient-to-tr from-secondary to-primary text-secondary-content mt-6 animate animate-pulse animatecss hover:animatecss-rubberBand font-burtons'>Go to Projects</Link>
            </div>
            <div className='w-full lg:w-1/3 px-4 sm:px-20 md:px-40 lg:px-0'>
                <img className='animate animate-pulse hover:animate-spin w-full lg:w-2/3 p-5 border rounded-full bg-gradient-to-tr from-primary to-secondary' src="https://i.ibb.co/rdyhVCr/1659429560757-removebg-preview-removebg-preview.jpg" alt="" />
            </div>

            <div className='w-full'>
                <div className='mt-24'>
                    <h1 className='text-center mb-5 font-extrabold font-burtons text-lg md:text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate animatecss hover:animatecss-rubberBand'>
                        My Works
                    </h1>
                    <h4 className='text-center font-poppins text-2xl md:text-4xl lg:text-6xl text-secondary-content'>These are Some of My Recent Projects</h4>
                </div>
                <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 md:px-6 lg:px-10'>
                    <div className="flex flex-col bg-black bg-opacity-30 shadow-xl rounded-lg">
                        <div className='h-64'>
                            <img src="https://i.ibb.co/FqXS14v/phone-heaven.png" alt="" className="w-full h-full rounded-lg" />
                        </div>
                        <div className="p-6">
                            <a rel='noreferrer' target='_blank' href='https://phone-heaven.web.app/' className="text-2xl block font-semibold sm:text-4xl group-hover:underline group-focus:underline font-burtons md:text-2xl lg:text-5xl text-secondary-content animatecss hover:animatecss-rubberBand">Phone Heaven</a>
                            <span className="text-sm font-semibold text-gray-600">Resale Website</span>
                            <div className='flex flex-wrap gap-3 mt-6'>
                                <a className="btn btn-secondary btn-xs" rel='noreferrer' target='_blank' href="https://phone-heaven.web.app/">Live site</a>
                                <a className="btn btn-primary btn-xs" rel='noreferrer' target='_blank' href="https://github.com/rakibul58/phone-heaven-client">Client Repo</a>
                                <a className="btn btn-accent btn-xs" rel='noreferrer' target='_blank' href="https://github.com/rakibul58/phone-heaven-server">Sever Repo</a>
                            </div>
                            <p className='mt-3 text-gray-50'>Mobile Heaven is a resale product website. </p>

                        </div>
                    </div>
                    <div className="flex flex-col bg-black bg-opacity-30 shadow-xl rounded-lg">
                        <div className='w-full h-64'>
                            <img src="https://i.ibb.co/3Nry49Y/dentistfantastic.png" alt="" className="w-full h-full rounded-lg" />
                        </div>
                        <div className="p-6 w-full">
                            <a rel='noreferrer' target='_blank' href='https://dentist-fantastic.web.app/' className="text-2xl block font-semibold sm:text-4xl group-hover:underline group-focus:underline font-burtons md:text-2xl lg:text-5xl text-secondary-content animatecss hover:animatecss-rubberBand">Dentist Fantastic</a>
                            <span className="text-sm font-semibold text-gray-600">Service Review Website</span>
                            <div className='flex flex-wrap gap-3 mt-6'>
                                <a className="btn btn-secondary btn-xs" rel='noreferrer' target='_blank' href="https://dentist-fantastic.web.app/">Live site</a>
                                <a className="btn btn-primary btn-xs" rel='noreferrer' target='_blank' href="https://github.com/rakibul58/dentist-fantastic-client">Client Repo</a>
                                <a className="btn btn-accent btn-xs" rel='noreferrer' target='_blank' href="https://github.com/rakibul58/dentist-fantastic-server">Sever Repo</a>
                            </div>
                            <p className='mt-3 text-gray-50'>Dentist Fantastic is a service review and commenting website.</p>

                        </div>
                    </div>
                    <div className="flex flex-col bg-black bg-opacity-30 shadow-xl rounded-lg">
                        <div className='w-full h-64'>
                            <img src="https://i.ibb.co/7J7Vk7V/infinitecourses.png" alt="" className="w-full h-full rounded-lg" />
                        </div>
                        <div className="p-6 w-full">
                            <a rel='noreferrer' target='_blank' href='https://infinit-courses.web.app/' className="text-2xl block font-semibold sm:text-4xl group-hover:underline group-focus:underline font-burtons md:text-2xl lg:text-5xl text-secondary-content animatecss hover:animatecss-rubberBand">Infinite Courses</a>
                            <span className="text-sm font-semibold text-gray-600">Education Website</span>
                            <div className='flex flex-wrap gap-3 mt-6'>
                                <a className="btn btn-secondary btn-xs" rel='noreferrer' target='_blank' href="/">Live site</a>
                                <a className="btn btn-primary btn-xs" rel='noreferrer' target='_blank' href="https://github.com/rakibul58/infinite-courses-client">Client Repo</a>
                                <a className="btn btn-accent btn-xs" rel='noreferrer' target='_blank' href="https://github.com/rakibul58/infinite-courses-server">Sever Repo</a>
                            </div>
                            <p className='mt-3 text-gray-50'>Infinite Course is a E-commerce website for courses.</p>

                        </div>
                    </div>
                </div>
            </div>
            <Link to='/projects' className='btn btn-primary bg-gradient-to-tr from-primary to-secondary text-secondary-content font-bold animatecss hover:animatecss-rubberBand text-center px-10'>See All</Link>
        </div>

    );
};

export default Home;