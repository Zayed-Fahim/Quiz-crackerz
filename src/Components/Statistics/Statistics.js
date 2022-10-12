import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const Statistics = () => {
    const [barChart, setBarChart] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/quiz")
            .then(res => res.json())
            .then(data => setBarChart(data.data))
    })
    console.log(barChart)
    return (
        <div className='flex justify-center my-[200px]'>
            <BarChart width={1000} height={600} data={barChart}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="total" fill="#8884d8" barSize={30} />
            </BarChart>
        </div>
    );
};

export default Statistics;