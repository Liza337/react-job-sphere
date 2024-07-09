import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faDollarSign,faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SingleJobPage = ({feature}) => {

    const {id,companyLogo,jobTitle,companyName,remoteOrOnsite,location,fulltimeOrPartTime,salary,jobDescription} =feature
    return (
        <div className="card card-side bg-base-100  shadow-xl">
            <figure ><img  src={companyLogo} alt="Image"/></figure>
            <div className="card-body">
                <h2 className="card-title my-2">{jobTitle}
                </h2>
                <p>{companyName}</p>
                <div className="card-actions justify-start my-2">
                    <div className="badge badge-outline text-blue-700">{remoteOrOnsite}</div>
                    <div className="badge badge-outline text-orange-700">{fulltimeOrPartTime}</div>
                </div>
                <div className="card-actions justify-start space-x-2">
                    <div><FontAwesomeIcon icon={faMapMarkerAlt} /> {location}</div>
                    <div><FontAwesomeIcon icon={faDollarSign} />Salary: {salary}</div>
                </div>
                <div className="card-actions justify-end">
                <Link to={`/feature/${id}`} className="btn btn-md btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleJobPage;