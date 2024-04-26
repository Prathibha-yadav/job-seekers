import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobItem from './JobItem';
import { Link } from 'react-router-dom';
import '../tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 h-20">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faBriefcase} className="text-white mr-2 mt-4" />
          <Link to="/" className="text-white font-bold text-2xl mt-2">
            Job Board
          </Link>
        </div>
        <div className="flex items-center mt-5">
          <Link to="/newjob" className="text-gray-300 mr-4 font-bold hover:text-white">
            Add Job
          </Link>
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
      <div className="container mx-auto py-8 p-8">
        <h2 className="text-3xl font-bold ml-6 mb-4">Job List</h2>
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
