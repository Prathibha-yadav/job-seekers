import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../tailwind.css";
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
          <Link to="/" className="text-gray-300 mr-4 font-bold hover:text-white">
            Home
          </Link>
        </div>
      </div>
    </nav>

  );
}

const AddJobForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    salary: 0,
  });

  const { title, description, salary } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/newjob', formData);
      window.location.href = 'http://localhost:3000'; // Redirect to the desired page
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8 p-8 mt-8 w-3/4 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl text-center font-bold mb-4">Add Job</h2>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="mb-4">
            <input type="text" name="title" value={title} onChange={handleChange} placeholder="Title" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <textarea name="description" value={description} onChange={handleChange} placeholder="Description" className="w-full h-32  px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <div className="mb-4">
            <input type="number" name="salary" value={salary} onChange={handleChange} placeholder="Salary" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddJobForm;
