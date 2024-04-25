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
      await axios.post('http://localhost:5000/jobs', formData);
      // Add additional logic as needed, like clearing the form fields or updating the job list
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
        <Navbar/>
      <h2>Add Job</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={title} onChange={handleChange} placeholder="Title" />
        <textarea name="description" value={description} onChange={handleChange} placeholder="Description" />
        <input type="number" name="salary" value={salary} onChange={handleChange} placeholder="Salary" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddJobForm;
