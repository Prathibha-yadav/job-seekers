import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import '../tailwind.css';

const JobItem = ({ job, onDelete }) => {
    const handleDelete = async () => {
        try {
          await axios.delete(`http://localhost:5000/jobs/${job.id}`);
          onDelete(job.id);
          window.location.reload(); 
        } catch (error) {
          console.error(error);
          // Handle error here, e.g., show a message to the user
        }
      };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 relative">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
      <p className="text-gray-600">{job.description}</p>
      <p className="text-gray-700 mt-2">Salary: ${job.salary}</p>
      <button
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        onClick={handleDelete}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default JobItem;
