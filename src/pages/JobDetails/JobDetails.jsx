import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner';


const JobDetails = () => {

    const data = useLoaderData();
    // console.log(data);

    const {id,companyLogo,jobTitle,companyName,remoteOrOnsite,location,fulltimeOrPartTime,salary,jobDescription} =data

    return (
        <div>
            <Banner/>
            <div>
               <h2>food details</h2>
            </div>
            
        </div>
    );
};

export default JobDetails;