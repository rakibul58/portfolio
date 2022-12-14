import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSlide = ({ project, id }) => {
    return (
        <div id={`item${id}`} className="carousel-item w-full animatecss animatecss-slideInDown mb-20 mx-auto">
            <div className='mx-auto'>
                <img style={{width:'100%'}} src={project.img} className='h-full animate animatecss animatecss-slow animate-pulse' alt="Album" />
                <Link className='btn btn-primary mt-5'>Details</Link>
            </div>
        </div>
    );
};

export default ProjectSlide;