import React, { useEffect, useState } from 'react';
import ProjectSlide from './ProjectSlide';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div className='flex w-full justify-center items-center animatecss animatecss-slow animatecss-backInRight my-12'>
            <div className='mx-auto px-10'>
                <h1 className='text-center mb-3 font-extrabold font-burtons text-lg md:text-xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate animatecss animatecss-slow hover:animatecss-rubberBand'>
                    My Works
                </h1>
                <h4 className='text-center font-poppins text-xxl md:text-2xl lg:text-3xl text-secondary-content'>These are Some of My Recent Projects</h4>
                <div className="carousel mt-12 w-full h-[320px] sm:h-[400px] lg:w-3/4 mx-auto">

                    {
                        projects.map((project , i)=><ProjectSlide key={i} project={project} id={i+1}></ProjectSlide>)
                    }

                </div>
                <div className="flex justify-center w-full py-2 gap-2 mt-3">
                    {
                        projects.map((pro, i) => <a href={`#item${i+1}`} key={i} className="btn btn-xs">{i + 1}</a>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;