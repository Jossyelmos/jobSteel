import React, { useContext, useEffect } from 'react';
import JobItem from './JobItem';
import Spinner from '../layout/Spinner';
import JobContext from '../../context/job/jobContext';

const Jobs = () => {
    const jobContext = useContext(JobContext);
    const { jobs, loading, getJobs } = jobContext;

    useEffect(() => {
        getJobs();
    }, []);

    if (loading) {
        return <Spinner />
    } else {
        return (
          <div style={userStyle}>
              {jobs.map(job => (
                  <JobItem key={job.id} job={job} />
              ))}
          </div>
        );
    };
};

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '1rem'
}

export default Jobs;