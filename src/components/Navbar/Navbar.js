import React from 'react';
import { Link } from 'react-router-dom';
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
                    <li><Link title='Home' to='/'><AiFillHome className='text-3xl hover:text-primary hover:transition-colors ease-in-out delay-200'></AiFillHome></Link></li>
                    <li><Link title='About' to='/about'><BsInfoCircleFill className='text-3xl hover:text-primary hover:transition-colors ease-in-out delay-200'></BsInfoCircleFill></Link></li>
                    <li><Link title='Skills' to='/skills'><GiBrain className='text-3xl hover:text-primary hover:transition-colors ease-in-out delay-200'></GiBrain></Link></li>
                    <li><Link title='Projects' to='/projects'><MdWork className='text-3xl hover:text-primary hover:transition-colors ease-in-out delay-200'></MdWork></Link></li>
                    <li><Link title='Contact' to='/contact'><MdMail className='text-3xl hover:text-primary hover:transition-colors ease-in-out delay-200'></MdMail></Link></li>
                </ul>
            </div>
            <div className="mt-auto">
                <ul className="flex flex-col gap-3 p-0">
                    <li><a rel='noreferrer' target="_blank" href='https://www.github.com/rakibul58'><BsGithub className='text-3xl hover:text-primary hover:transition-colors ease-in-out delay-200'></BsGithub></a></li>
                    <li><a rel='noreferrer' target="_blank" href='https://www.linkedin.com/in/muhammed-rakibul-hasan'><BsLinkedin className='text-3xl hover:text-primary hover:transition-colors ease-in-out delay-200'></BsLinkedin></a></li>
                    <li><a rel='noreferrer' target="_blank" href='https://twitter.com/rakibul147'><BsTwitter className='text-3xl hover:text-primary hover:transition-colors ease-in-out delay-200'></BsTwitter></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;