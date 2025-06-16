import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Job = ({job}) => {
    const {company,company_logo}=job;
    return (
        <div>
            <h1>{company}</h1>
        </div>
    );
};

export default Job;