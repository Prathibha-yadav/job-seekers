import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">Job Board</Link>
        <div>
          <Link to="/" className="text-white mr-4">Home</Link>
          {/* Add more links here if needed */}
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
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">Add Job</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <input type="text" name="title" value={title} onChange={handleChange} placeholder="Title" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <textarea name="description" value={description} onChange={handleChange} placeholder="Description" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"></textarea>
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
