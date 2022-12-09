import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsInfoCircleFill, BsTwitter } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { MdMail, MdWork } from "react-icons/md";
import { GiBrain } from "react-icons/gi";

const Navbar = () => {
    return (
        <div style={{ height: "100vh" }} className='flex flex-col py-10 px-4'>
            <div className="">
                <h1 className='text-8xl font-bold font-burtons text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>R</h1>
            </div>
            <div className="my-auto">
                <ul className="flex flex-col gap-6  p-0">
                    <li><NavLink active title='Home' to='/'><AiFillHome className='text-3xl hover:text-secondary text-primary-focus animate animatecss hover:animatecss-rubberBand'></AiFillHome></NavLink></li>
                    <li><NavLink title='About' to='/about'><BsInfoCircleFill className='text-3xl hover:text-secondary text-primary-focus animate animatecss hover:animatecss-rubberBand'></BsInfoCircleFill></NavLink></li>
                    <li><NavLink title='Skills' to='/skills'><GiBrain className='text-3xl hover:text-secondary text-primary-focus animate animatecss hover:animatecss-rubberBand'></GiBrain></NavLink></li>
                    <li><NavLink title='Projects' to='/projects'><MdWork className='text-3xl hover:text-secondary text-primary-focus animate animatecss hover:animatecss-rubberBand'></MdWork></NavLink></li>
                    <li><NavLink title='Contact' to='/contact'><MdMail className='text-3xl hover:text-secondary text-primary-focus animate animatecss hover:animatecss-rubberBand'></MdMail></NavLink></li>
                </ul>
            </div>
            <div className="mt-auto">
                <ul className="flex flex-col gap-3 p-0">
                    <li><a rel='noreferrer' target="_blank" href='https://www.github.com/rakibul58'><BsGithub className='text-3xl hover:text-secondary text-opacity-50 text-primary-focus animate animatecss hover:animatecss-rubberBand'></BsGithub></a></li>
                    <li><a rel='noreferrer' target="_blank" href='https://www.linkedin.com/in/muhammed-rakibul-hasan'><BsLinkedin className='text-3xl hover:text-secondary text-opacity-50 text-primary-focus animate animatecss hover:animatecss-rubberBand'></BsLinkedin></a></li>
                    <li><a rel='noreferrer' target="_blank" href='https://twitter.com/rakibul147'><BsTwitter className='text-3xl hover:text-secondary text-opacity-50 text-primary-focus animate animatecss hover:animatecss-rubberBand'></BsTwitter></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;