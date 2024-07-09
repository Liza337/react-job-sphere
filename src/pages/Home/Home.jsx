import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import { useLoaderData } from 'react-router-dom';
import SingleJobPage from '../../components/SingleJobPage';
import JobCategory from '../../components/JobCategory';
const Home = () => {

    const data = useLoaderData()
    console.log(data)

    const [jobs, setJobs] =useState(data)
    const[ShowAll,setShowALL]=useState(false)

    const [categories, setCategories]= useState([])

    useEffect(() => {
        // Fetch category data
        fetch('/category.json')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);


    return (
        <div>
            <Banner/>
            

            {/** job category section */}

            <div className='mt-20 mb-8'>
                <h1 className="text-3xl text-center py-5 font-bold">Job Category List</h1>
           </div>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
               {
               
               categories.map((category) => <JobCategory category ={category}/>)
               
               }
           </div>


            {/* Job section starts here   */}

            <div className='my-8'>
                <h1 className="text-3xl text-center py-5 font-bold">Featured Jobs</h1>
            </div>

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