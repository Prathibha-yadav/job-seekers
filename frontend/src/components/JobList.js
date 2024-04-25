import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobItem from './JobItem';
import { Link } from 'react-router-dom';
import '../tailwind.css';

function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">Job Board</Link>
        <div>
          <Link to="/newjob" className="text-white mr-4">Add Job</Link>
        </div>
      </div>
    </nav>
  );
}

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchJobs();
  }, []);

  const handleDelete = async (jobId) => {
    try {
      await axios.delete(`http://localhost:5000/jobs/${jobId}`);
      setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId));
      window.location.reload(); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">Job List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {jobs.map((job) => (
            <JobItem key={job.id} job={job} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
};

export default JobList;
