import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import SingleJobPage from '../../components/SingleJobPage';
import DynamicBanner from '../../components/DynamicBanner';

const AppliedJob = () => {

    const [applied, setApplied] =useState([])
    const [filterApplied, setFilterApplied] =useState([])

    useEffect(() => {
        // content
        const storedData = JSON.parse(localStorage.getItem("applied"))
        if(storedData)
            {
                setApplied(storedData)
                setFilterApplied(storedData)
            }
    }, []);

    const handleFilter = (event) => {
        const value = event.target.value;
        const filterData = applied.filter((item) => item.remoteOrOnsite == value );
        setFilterApplied(filterData)
      }


    return (
        <div>
         <DynamicBanner title="Applied Jobs" subtitle="Jobs you have applied for" />

            {/** filter jobs */}

            <div className='my-8'>
               
                <select onChange={handleFilter} className="select select-bordered bg-base-200 w-full max-w-xs">
                    <option disabled selected className='font-bold'>Filter By</option>
                    <option value="Onsite">Onsite</option>
                    <option value="Remote">Remote</option>
                </select>
            </div>

            {/* applied job here*/}
            {
                filterApplied.length > 0 ?(
                filterApplied?.map((feature) => <div className='border-1 my-4'>
                <SingleJobPage feature ={feature}/>
                </div>))
                :
                (<h1 className="text-xl text-center text-red-500">
                No Order Found</h1>)
            }
        </div>
    );
};

export default AppliedJob;