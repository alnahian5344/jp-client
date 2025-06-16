import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';
import Job from './Job';

const JobsCards = () => {

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
                console.log(data);
            })
    }, [])

    return (
        <div>
           {
            jobs.map(job=><Job key={job._id} job={job}></Job>)
           }
        </div>
    );
};

export default JobsCards;