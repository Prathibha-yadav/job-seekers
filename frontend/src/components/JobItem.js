import React from 'react';
import '../tailwind.css';

const JobItem = ({ job }) => {
  return (
    <ul className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
      <p className="text-gray-600">{job.description}</p>
      <p className="text-gray-700 mt-2">Salary: ${job.salary}</p>
    </ul>
  );
};

export default JobItem;
