import React from 'react';

import bannerImg from '../assets/job-search.jpeg'

const Banner = () => {
    return (
        <div className="hero relative bg-gradient-to-r from-purple-200 shadow-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                src={bannerImg}
                className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="px-4 lg:px-0">
                    <h1 className="text-5xl font-bold">One Step<br/> Closer to Your<br/> <span className='text-blue-300'>Dream Job</span></h1>
                    <p className="py-6">
                        Explore thousands of job opportunities with all the information you need. Its your future . Come find it. Manage all your job applications from start to finish
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;