import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faDollarSign,faMoneyBillWave,faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const JobDetails = () => {

    const data = useLoaderData();
    // console.log(data);

    const {id,companyLogo,jobTitle,companyName,remoteOrOnsite,location,fulltimeOrPartTime,salary,jobDescription,educationalRequirements,jobResponsibility,experiences,contactInformation} =data

    return (
        <div>
            <Banner/>
            <div className='mt-12 flex mb-10'>

               {/** job details */}
               <div className='flex-1 mr-4'>
                  <p className='mb-4'> <span className='font-bold'>Job Description: </span> {jobDescription}</p>
                  <p className='mb-4'><span className='font-bold'>JobResponsibility: </span> {jobResponsibility}</p>
                  <p className='mb-4'><span className='font-bold'>Educational Requirements: </span>  {educationalRequirements}</p>
                  <p><span className='font-bold'>Experiences: </span> {experiences}</p>
               </div>

                {/** apply here  */}
               <div className="card bg-base-200 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className=" font-bold my-2 text-lg">Job Details
                        </h2>
                        <hr />
                        
                        <div><FontAwesomeIcon icon={faMapMarkerAlt} /><span className='font-semibold'>Job Title: </span> {jobTitle}</div>
                        <div><FontAwesomeIcon icon={faDollarSign} /> <span className='font-semibold'>Salary: </span> {salary}</div>
                        

                        <h2 className="font-bold text-lg my-2">Contact Information
                        </h2>
                        <hr />
                        
                        <div><FontAwesomeIcon icon={faPhone} /><span className='font-semibold'> Phone: </span>{contactInformation.phone}</div>
                        <div><FontAwesomeIcon icon={faEnvelope} /><span className='font-semibold'> Email: </span>{contactInformation.email}</div>
                        <div><FontAwesomeIcon icon={faMapMarkerAlt} /><span className='font-semibold'> Address: </span>{location}</div>
                        
                       
                        <div className="card-actions justify-center">
                        <button className="btn btn-md w-full btn-primary mt-2">Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default JobDetails;