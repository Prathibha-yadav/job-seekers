import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddJobForm from './components/AddJobForm';
import JobList from './components/JobList';
import './tailwind.css';


function App() {
  return (
    <div className="App">
      <Router>
       
        
          <Routes>
            <Route exact path="/" element={<JobList />} />
            <Route path="/newjob" element={<AddJobForm />} />
          </Routes>
       
      </Router>
    </div>
  );
}

export default App;
