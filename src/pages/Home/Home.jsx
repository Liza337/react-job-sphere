import React, { useState } from 'react';
import Banner from '../../components/Banner';
import { useLoaderData } from 'react-router-dom';
import SingleJobPage from '../../components/SingleJobPage';
const Home = () => {

    const data = useLoaderData()
    console.log(data)

    const [jobs, setJobs] =useState(data)
    const[ShowAll,setShowALL]=useState(false)

    return (
        <div>
            <Banner/>
            
            <div className='my-8'>
                <h1 className="text-3xl text-center py-5 font-bold">Our Featured Jobs</h1>
            </div>

            {/* Job section starts here   */}

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                 {
                    ShowAll?
                    jobs.map((feature) => <SingleJobPage feature ={feature}/>)
                    :
                    jobs.slice(0,4).map((feature) => <SingleJobPage feature ={feature}/>)
                 }
            </div>

            <div className='text-center mb-10'>
                   {
                    !ShowAll &&<button onClick={() => setShowALL(true)} className='btn btn-sm btn-secondary my-4'>
                       Show All
                   </button>
                   }
            </div>

          
        </div>
    );
};

export default Home;