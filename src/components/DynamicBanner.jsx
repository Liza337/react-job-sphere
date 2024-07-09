import React from 'react';

const DynamicBanner = ({ title, subtitle }) => {
    return (
        <div className="hero relative bg-gradient-to-r from-purple-200 py-20 shadow-lg">
                <div className="px-4 lg:px-0">
                    <h1 className="text-4xl font-bold text-center">{title}</h1>
                    <p className="text-lg py-6">{subtitle}</p>
                    
                </div>
            
        </div>
    );
};

export default DynamicBanner;