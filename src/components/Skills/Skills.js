import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiBootstrap, SiC, SiCplusplus, SiExpress, SiFirebase, SiJavascript, SiMongodb, SiMysql, SiNodedotjs, SiQt, SiReactrouter, SiSqlite, SiTailwindcss, SiVisualstudiocode } from 'react-icons/si';

const Skills = () => {
    return (
        <div className='flex flex-wrap flex-col-reverse lg:flex-row items-center lg:justify-around gap-y-10 gap-5 w-full my-20 pr-10 lg:pr-0 animate animatecss animatecss-backInLeft p-10'>
            <div className='w-full lg:w-1/2 mx-auto'>
                <h1 className='font-burtons text-2xl md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate animatecss hover:animatecss-rubberBand'>
                    <strong>What I Do</strong>
                </h1>
                <p className='font-poppins text-gray-600 animatecss hover:animatecss-rubberBand animate lg:text-xl mt-12'>
                    I am a MERN stack Developer. I am most comfortable working with React JS. I also like working with mongoDB, javaScript, express.js and node.js. I also frequently work with CSS frameworks such as Tailwind and Bootstrap.
                </p>
                <p className='font-poppins text-gray-600 animatecss hover:animatecss-rubberBand animate lg:text-xl my-4 '>
                    Apart from these, I am a student of Computer Science and Engineering. I am familiar with programming languages C and C++. Also with C++, I am familiar with Object Oriented Programming. I have also worked with MySQL and sqLite for the semester final projects.
                </p>
            </div>
            <div className='w-full lg:w-1/3 mx-auto'>
                <div className='flex flex-wrap gap-10 mx-auto'>
                    <div><AiFillHtml5 className='text-7xl text-blue-500 animatecss animatecss-tada animatecss-infinite hover:animatecss-rubberBand'></AiFillHtml5></div>
                    <div><FaCss3Alt className='text-7xl text-orange-600 animatecss animatecss-tada animatecss-infinite hover:animatecss-rubberBand'></FaCss3Alt></div>
                    <div><SiJavascript className='text-7xl text-yellow-300 animatecss animatecss-tada animatecss-infinite hover:animatecss-rubberBand'></SiJavascript></div>
                    <div><FaReact className='text-7xl text-cyan-400 animatecss animatecss-tada animatecss-infinite hover:animatecss-rubberBand'></FaReact></div>
                    <div><SiTailwindcss className='text-7xl text-cyan-500 animatecss animatecss-tada animatecss-infinite hover:animatecss-rubberBand'></SiTailwindcss></div>
                    <div><SiBootstrap className='text-7xl text-violet-600 animatecss animatecss-tada animatecss-infinite hover:animatecss-rubberBand'></SiBootstrap></div>
                    <div><SiReactrouter className='text-7xl text-red-600 animatecss animatecss-tada animatecss-infinite hover:animatecss-rubberBand'></SiReactrouter></div>
                    <div><SiMongodb className='text-7xl text-green-600 animatecss animatecss-tada animatecss-infinite hover:animatecss-rubberBand'></SiMongodb></div>
                    <div><SiExpress className='text-7xl text-gray-600 animatecss animatecss-tada animatecss-infinite hover:animatecss-rubberBand'></SiExpress></div>
                    <div><SiNodedotjs className='text-7xl text-green-600 animatecss animatecss-tada animatecss-infinite hover:animatecss-rubberBand'></SiNodedotjs></div>
                    <div><SiMysql className='text-7xl text-cyan-700 animatecss animatecss-tada animatecss-infinite hover:animatecss-rubberBand'></SiMysql></div>
                    <div><SiSqlite className='text-7xl text-indigo-400 animatecss animatecss-tada animatecss-infinite hover:animatecss-rubberBand'></SiSqlite></div>
                    <div><SiQt className='text-7xl text-green-600 animatecss animatecss-tada animatecss-infinite hover:animatecss-rubberBand'></SiQt></div>
                    <div><SiC className='text-7xl text-blue-800 animatecss animatecss-tada animatecss-infinite hover:animatecss-rubberBand'></SiC></div>
                    <div><SiCplusplus className='text-7xl text-blue-800 animatecss animatecss-tada animatecss-infinite hover:animatecss-rubberBand'></SiCplusplus></div>
                    <div><SiFirebase className='text-7xl text-yellow-500 animatecss animatecss-tada animatecss-infinite hover:animatecss-rubberBand'></SiFirebase></div>
                    <div><SiVisualstudiocode className='text-7xl text-blue-500 animatecss animatecss-tada animatecss-infinite hover:animatecss-rubberBand'></SiVisualstudiocode></div>
                </div>
            </div>
        </div>
    );
};

export default Skills;