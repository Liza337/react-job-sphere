import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Banner from '../../components/Banner';

const Statistics = () => {
    const data = [
        {
            name: 'Assignment-1',
            marks: 50,
        },
        {
            name: 'Assignment-2',
            marks: 56,
        },
        {
            name: 'Assignment-3',
            marks: 57,
        },
        {
            name: 'Assignment-4',
            marks: 60,
        },
        {
            name: 'Assignment-5',
            marks: 42,
        },
        {
            name: 'Assignment-6',
            marks: 30,
        },
        {
            name: 'Assignment-7',
            marks: 30,
        },
        {
            name: 'Assignment-8',
            marks: 29,
        }
    ];
    
 
    return (
       <div>
            <Banner/>
            <div style={{ width: '100%', height: 400 }} className="mb-36 mt-12">
                    <ResponsiveContainer>
                        <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                        }}
                        barSize={20}
                    >
                        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="marks" fill="#8884d8" background={{ fill: '#eee' }} />
                    </BarChart>
                    </ResponsiveContainer>
                </div>
       </div>
    );
};

export default Statistics;