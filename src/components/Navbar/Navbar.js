import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsInfoCircleFill, BsTwitter } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { MdBook, MdMail, MdWork } from "react-icons/md";
import { GiBrain } from "react-icons/gi";

const Navbar = () => {
    return (
        <div className='flex lg:h-[100vh] flex-row items-center lg:flex-col py-3 lg:py-10 px-5 lg:px-1 bg-black bg-opacity-5'>

            <div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-primary-content lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-200 rounded-box w-52">
                        <li><NavLink className={({ isActive }) =>
                            isActive ? "text-secondary-focus" : "text-primary-focus"
                        } title='Home' to='/'><AiFillHome className='text-3xl mx-auto hover:text-secondary animate animatecss hover:animatecss-rubberBand'></AiFillHome></NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? "text-secondary-focus" : "text-primary-focus"
                        } title='About' to='/about'><BsInfoCircleFill className='text-3xl mx-auto hover:text-secondary animate animatecss hover:animatecss-rubberBand'></BsInfoCircleFill></NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? "text-secondary-focus" : "text-primary-focus"
                        } title='Skills' to='/skills'><GiBrain className='text-3xl mx-auto hover:text-secondary animate animatecss hover:animatecss-rubberBand'></GiBrain></NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? "text-secondary-focus" : "text-primary-focus"
                        } title='Projects' to='/projects'><MdWork className='text-3xl mx-auto hover:text-secondary animate animatecss hover:animatecss-rubberBand'></MdWork></NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? "text-secondary-focus" : "text-primary-focus"
                        } title='Contact' to='/contact'><MdMail className='text-3xl mx-auto hover:text-secondary animate animatecss hover:animatecss-rubberBand'></MdMail></NavLink></li>
                        {/* <li><NavLink className={({ isActive }) =>
                            isActive ? "text-secondary-focus" : "text-primary-focus"
                        } title='Blogs' to='/blogs'><MdBook className='text-3xl mx-auto hover:text-secondary animate animatecss hover:animatecss-rubberBand'></MdBook></NavLink></li> */}
                    </ul>
                </div>
            </div>

            <div className="lg:mx-auto ml-auto">
                <h1 className='text-6xl lg:block hidden font-bold font-burtons text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>R</h1>
                <h1 className='text-xl sm:text-4xl lg:hidden block font-bold font-burtons text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Muhammed Rakibul Hasan</h1>
            </div>

            <div className="lg:my-auto mx-auto hidden lg:block">
                <ul className="flex flex-col gap-6  p-0">
                    <li><NavLink className={({ isActive }) =>
                        isActive ? "text-secondary-focus" : "text-primary-focus"
                    } title='Home' to='/'><AiFillHome className='text-3xl hover:text-secondary animate animatecss hover:animatecss-rubberBand'></AiFillHome></NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        isActive ? "text-secondary-focus" : "text-primary-focus"
                    } title='About' to='/about'><BsInfoCircleFill className='text-3xl hover:text-secondary animate animatecss hover:animatecss-rubberBand'></BsInfoCircleFill></NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        isActive ? "text-secondary-focus" : "text-primary-focus"
                    } title='Skills' to='/skills'><GiBrain className='text-3xl hover:text-secondary animate animatecss hover:animatecss-rubberBand'></GiBrain></NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        isActive ? "text-secondary-focus" : "text-primary-focus"
                    } title='Projects' to='/projects'><MdWork className='text-3xl hover:text-secondary animate animatecss hover:animatecss-rubberBand'></MdWork></NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        isActive ? "text-secondary-focus" : "text-primary-focus"
                    } title='Contact' to='/contact'><MdMail className='text-3xl hover:text-secondary animate animatecss hover:animatecss-rubberBand'></MdMail></NavLink></li>
                    {/* <li><NavLink className={({ isActive }) =>
                        isActive ? "text-secondary-focus" : "text-primary-focus"
                    } title='Blogs' to='/blogs'><MdBook className='text-3xl hover:text-secondary animate animatecss hover:animatecss-rubberBand'></MdBook></NavLink></li> */}
                </ul>
            </div>
            <div className="hidden lg:block lg:mt-auto mx-auto">
                <ul className="flex flex-row lg:flex-col gap-3 p-0">
                    <li><a rel='noreferrer' target="_blank" href='https://www.github.com/rakibul58'><BsGithub className='text-3xl hover:text-secondary text-opacity-50 text-primary-focus animate animatecss hover:animatecss-rubberBand'></BsGithub></a></li>
                    <li><a rel='noreferrer' target="_blank" href='https://www.linkedin.com/in/muhammed-rakibul-hasan'><BsLinkedin className='text-3xl hover:text-secondary text-opacity-50 text-primary-focus animate animatecss hover:animatecss-rubberBand'></BsLinkedin></a></li>
                    <li><a rel='noreferrer' target="_blank" href='https://twitter.com/rakibul147'><BsTwitter className='text-3xl hover:text-secondary text-opacity-50 text-primary-focus animate animatecss hover:animatecss-rubberBand'></BsTwitter></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;