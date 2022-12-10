import React from 'react';
import { SiGit, SiGithub } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='flex w-full justify-center items-center animatecss animatecss-backInRight my-12'>
            <div className='mx-auto px-10'>
                <h1 className='text-center mb-5 font-extrabold font-burtons text-lg md:text-2xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate animatecss hover:animatecss-rubberBand'>
                    My Works
                </h1>
                <h4 className='text-center font-poppins text-2xl md:text-4xl lg:text-6xl text-secondary-content'>These are Some of My Recent Projects</h4>
                <div className='my-12'>
                    <section className="bg-black text-gray-50 bg-opacity-5 p-10">
                        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                            <div className="flex flex-col lg:flex-row bg-black bg-opacity-30 shadow-xl">
                                <div className='w-full lg:w-1/2'>
                                    <img src="https://i.ibb.co/FqXS14v/phone-heaven.png" alt="" className="w-full h-full " />
                                </div>
                                <div className="p-6 w-full lg:w-1/2">
                                    <a rel='noreferrer' target='_blank' href='https://phone-heaven.web.app/' className="text-2xl block font-semibold sm:text-4xl group-hover:underline group-focus:underline font-burtons md:text-2xl lg:text-5xl text-secondary-content animatecss hover:animatecss-rubberBand">Phone Heaven</a>
                                    <span className="text-sm font-semibold text-gray-600">Resale Website</span>
                                    <div className='flex flex-wrap gap-3 mt-6'>
                                        <a className="btn btn-secondary btn-xs" rel='noreferrer' target='_blank' href="https://phone-heaven.web.app/">Live site</a>
                                        <a className="btn btn-accent btn-xs" rel='noreferrer' target='_blank' href="https://github.com/rakibul58/phone-heaven-client">Client Repo</a>
                                        <a className="btn btn-primary btn-xs" rel='noreferrer' target='_blank' href="https://github.com/rakibul58/phone-heaven-server">Sever Repo</a>
                                    </div>
                                    <p className='mt-3 text-gray-50'>Mobile Heaven is a resale product website. This is website is for reselling mobile phones.It's feature includes:</p>
                                    <ul className='list-disc pl-5 mt-3 text-gray-50'>

                                        <li>Categories are Loaded From Database. Each Category has it's own dynamic route where different phones under that category are shown.</li>

                                        <li>A Buyer can book or report a phone. But the seller and admin cannot book or report. After booking the phone would be not shown so other buyers cannot book it.</li>

                                        <li>A Buyer can see their booked phones. He can buy it and delete it. Payment system is implemented using React stripe. After Buying Pay Button will be gone and in it's place it will show paid.</li>
                                    </ul>

                                </div>
                            </div>
                            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="flex flex-col bg-black bg-opacity-30 shadow-xl">
                                    <div className='w-full h-64'>
                                        <img src="https://i.ibb.co/PhmZFvz/dentistfantastic.png" alt="" className="w-full h-full " />
                                    </div>
                                    <div className="p-6 w-full">
                                        <a rel='noreferrer' target='_blank' href='https://phone-heaven.web.app/' className="text-2xl block font-semibold sm:text-4xl group-hover:underline group-focus:underline font-burtons md:text-2xl lg:text-5xl text-secondary-content animatecss hover:animatecss-rubberBand">Phone Heaven</a>
                                        <span className="text-sm font-semibold text-gray-600">Resale Website</span>
                                        <div className='flex flex-wrap gap-3 mt-6'>
                                            <a className="btn btn-secondary btn-xs" rel='noreferrer' target='_blank' href="/">Live site</a>
                                            <a className="btn btn-accent btn-xs" rel='noreferrer' target='_blank' href="/">Client Repo</a>
                                            <a className="btn btn-primary btn-xs" rel='noreferrer' target='_blank' href="/">Sever Repo</a>
                                        </div>
                                        <p className='mt-3 text-gray-50'>Mobile Heaven is a resale product website. This is website is for reselling mobile phones.It's feature includes:</p>
                                        <ul className='list-disc pl-5 mt-3 text-gray-50'>

                                            <li>Categories are Loaded From Database. Each Category has it's own dynamic route where different phones under that category are shown.</li>

                                            <li>A Buyer can book or report a phone. But the seller and admin cannot book or report. After booking the phone would be not shown so other buyers cannot book it.</li>

                                            <li>A Buyer can see their booked phones. He can buy it and delete it. Payment system is implemented using React stripe. After Buying Pay Button will be gone and in it's place it will show paid.</li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="flex flex-col bg-black bg-opacity-30 shadow-xl">
                                    <div className='w-full h-64'>
                                        <img src="https://i.ibb.co/FqXS14v/phone-heaven.png" alt="" className="w-full h-full " />
                                    </div>
                                    <div className="p-6 w-full">
                                        <a rel='noreferrer' target='_blank' href='https://phone-heaven.web.app/' className="text-2xl block font-semibold sm:text-4xl group-hover:underline group-focus:underline font-burtons md:text-2xl lg:text-5xl text-secondary-content animatecss hover:animatecss-rubberBand">Phone Heaven</a>
                                        <span className="text-sm font-semibold text-gray-600">Resale Website</span>
                                        <div className='flex flex-wrap gap-3 mt-6'>
                                            <a className="btn btn-secondary btn-xs" rel='noreferrer' target='_blank' href="/">Live site</a>
                                            <a className="btn btn-accent btn-xs" rel='noreferrer' target='_blank' href="/">Client Repo</a>
                                            <a className="btn btn-primary btn-xs" rel='noreferrer' target='_blank' href="/">Sever Repo</a>
                                        </div>
                                        <p className='mt-3 text-gray-50'>Mobile Heaven is a resale product website. This is website is for reselling mobile phones.It's feature includes:</p>
                                        <ul className='list-disc pl-5 mt-3 text-gray-50'>

                                            <li>Categories are Loaded From Database. Each Category has it's own dynamic route where different phones under that category are shown.</li>

                                            <li>A Buyer can book or report a phone. But the seller and admin cannot book or report. After booking the phone would be not shown so other buyers cannot book it.</li>

                                            <li>A Buyer can see their booked phones. He can buy it and delete it. Payment system is implemented using React stripe. After Buying Pay Button will be gone and in it's place it will show paid.</li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="flex flex-col bg-black bg-opacity-30 shadow-xl">
                                    <div className='w-full h-64'>
                                        <img src="https://i.ibb.co/FqXS14v/phone-heaven.png" alt="" className="w-full h-full " />
                                    </div>
                                    <div className="p-6 w-full">
                                        <a rel='noreferrer' target='_blank' href='https://phone-heaven.web.app/' className="text-2xl block font-semibold sm:text-4xl group-hover:underline group-focus:underline font-burtons md:text-2xl lg:text-5xl text-secondary-content animatecss hover:animatecss-rubberBand">Phone Heaven</a>
                                        <span className="text-sm font-semibold text-gray-600">Resale Website</span>
                                        <div className='flex flex-wrap gap-3 mt-6'>
                                            <a className="btn btn-secondary btn-xs" rel='noreferrer' target='_blank' href="/">Live site</a>
                                            <a className="btn btn-accent btn-xs" rel='noreferrer' target='_blank' href="/">Client Repo</a>
                                            <a className="btn btn-primary btn-xs" rel='noreferrer' target='_blank' href="/">Sever Repo</a>
                                        </div>
                                        <p className='mt-3 text-gray-50'>Mobile Heaven is a resale product website. This is website is for reselling mobile phones.It's feature includes:</p>
                                        <ul className='list-disc pl-5 mt-3 text-gray-50'>

                                            <li>Categories are Loaded From Database. Each Category has it's own dynamic route where different phones under that category are shown.</li>

                                            <li>A Buyer can book or report a phone. But the seller and admin cannot book or report. After booking the phone would be not shown so other buyers cannot book it.</li>

                                            <li>A Buyer can see their booked phones. He can buy it and delete it. Payment system is implemented using React stripe. After Buying Pay Button will be gone and in it's place it will show paid.</li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="flex flex-col bg-black bg-opacity-30 shadow-xl">
                                    <div className='w-full h-64'>
                                        <img src="https://i.ibb.co/FqXS14v/phone-heaven.png" alt="" className="w-full h-full " />
                                    </div>
                                    <div className="p-6 w-full">
                                        <a rel='noreferrer' target='_blank' href='https://phone-heaven.web.app/' className="text-2xl block font-semibold sm:text-4xl group-hover:underline group-focus:underline font-burtons md:text-2xl lg:text-5xl text-secondary-content animatecss hover:animatecss-rubberBand">Phone Heaven</a>
                                        <span className="text-sm font-semibold text-gray-600">Resale Website</span>
                                        <div className='flex flex-wrap gap-3 mt-6'>
                                            <a className="btn btn-secondary btn-xs" rel='noreferrer' target='_blank' href="/">Live site</a>
                                            <a className="btn btn-accent btn-xs" rel='noreferrer' target='_blank' href="/">Client Repo</a>
                                            <a className="btn btn-primary btn-xs" rel='noreferrer' target='_blank' href="/">Sever Repo</a>
                                        </div>
                                        <p className='mt-3 text-gray-50'>Mobile Heaven is a resale product website. This is website is for reselling mobile phones.It's feature includes:</p>
                                        <ul className='list-disc pl-5 mt-3 text-gray-50'>

                                            <li>Categories are Loaded From Database. Each Category has it's own dynamic route where different phones under that category are shown.</li>

                                            <li>A Buyer can book or report a phone. But the seller and admin cannot book or report. After booking the phone would be not shown so other buyers cannot book it.</li>

                                            <li>A Buyer can see their booked phones. He can buy it and delete it. Payment system is implemented using React stripe. After Buying Pay Button will be gone and in it's place it will show paid.</li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="flex flex-col bg-black bg-opacity-30 shadow-xl">
                                    <div className='w-full h-64'>
                                        <img src="https://i.ibb.co/FqXS14v/phone-heaven.png" alt="" className="w-full h-full " />
                                    </div>
                                    <div className="p-6 w-full">
                                        <a rel='noreferrer' target='_blank' href='https://phone-heaven.web.app/' className="text-2xl block font-semibold sm:text-4xl group-hover:underline group-focus:underline font-burtons md:text-2xl lg:text-5xl text-secondary-content animatecss hover:animatecss-rubberBand">Phone Heaven</a>
                                        <span className="text-sm font-semibold text-gray-600">Resale Website</span>
                                        <div className='flex flex-wrap gap-3 mt-6'>
                                            <a className="btn btn-secondary btn-xs" rel='noreferrer' target='_blank' href="/">Live site</a>
                                            <a className="btn btn-accent btn-xs" rel='noreferrer' target='_blank' href="/">Client Repo</a>
                                            <a className="btn btn-primary btn-xs" rel='noreferrer' target='_blank' href="/">Sever Repo</a>
                                        </div>
                                        <p className='mt-3 text-gray-50'>Mobile Heaven is a resale product website. This is website is for reselling mobile phones.It's feature includes:</p>
                                        <ul className='list-disc pl-5 mt-3 text-gray-50'>

                                            <li>Categories are Loaded From Database. Each Category has it's own dynamic route where different phones under that category are shown.</li>

                                            <li>A Buyer can book or report a phone. But the seller and admin cannot book or report. After booking the phone would be not shown so other buyers cannot book it.</li>

                                            <li>A Buyer can see their booked phones. He can buy it and delete it. Payment system is implemented using React stripe. After Buying Pay Button will be gone and in it's place it will show paid.</li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="flex flex-col bg-black bg-opacity-30 shadow-xl">
                                    <div className='w-full h-64'>
                                        <img src="https://i.ibb.co/FqXS14v/phone-heaven.png" alt="" className="w-full h-full " />
                                    </div>
                                    <div className="p-6 w-full">
                                        <a rel='noreferrer' target='_blank' href='https://phone-heaven.web.app/' className="text-2xl block font-semibold sm:text-4xl group-hover:underline group-focus:underline font-burtons md:text-2xl lg:text-5xl text-secondary-content animatecss hover:animatecss-rubberBand">Phone Heaven</a>
                                        <span className="text-sm font-semibold text-gray-600">Resale Website</span>
                                        <div className='flex flex-wrap gap-3 mt-6'>
                                            <a className="btn btn-secondary btn-xs" rel='noreferrer' target='_blank' href="/">Live site</a>
                                            <a className="btn btn-accent btn-xs" rel='noreferrer' target='_blank' href="/">Client Repo</a>
                                            <a className="btn btn-primary btn-xs" rel='noreferrer' target='_blank' href="/">Sever Repo</a>
                                        </div>
                                        <p className='mt-3 text-gray-50'>Mobile Heaven is a resale product website. This is website is for reselling mobile phones.It's feature includes:</p>
                                        <ul className='list-disc pl-5 mt-3 text-gray-50'>

                                            <li>Categories are Loaded From Database. Each Category has it's own dynamic route where different phones under that category are shown.</li>

                                            <li>A Buyer can book or report a phone. But the seller and admin cannot book or report. After booking the phone would be not shown so other buyers cannot book it.</li>

                                            <li>A Buyer can see their booked phones. He can buy it and delete it. Payment system is implemented using React stripe. After Buying Pay Button will be gone and in it's place it will show paid.</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <a rel='noreferrer' target='_blank' href='https://github.com/rakibul58' type="button" className="btn bg-gradient-to-tr from-primary to-secondary border-0 text-white animatecss hover:animatecss-rubberBand">Go to <SiGithub className='mx-2 text-lg'></SiGithub> for more</a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Projects;