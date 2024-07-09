import React from 'react';

const JobCategory = ({category}) => {

    const {logo,name,jobs} =category

    return (
        <div className="card bg-base-200 shadow-xl h-60">
            <figure><img src={logo} alt="Image"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}
                    </h2>
                    <p>{jobs}</p>
                    
                </div>
        </div>
    );
};

export default JobCategory;
