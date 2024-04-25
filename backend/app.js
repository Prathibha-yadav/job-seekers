const express = require('express');
const app = express();
const { Job, User } = require("./models");
const path = require("path");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const cors = require('cors');
const allowedOrigins = ['http://localhost:3000']; 

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

app.get('/jobs', async (req, res) => {
    try {
      const jobs = await Job.findAll();
      res.status(200).json(jobs); 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

app.post('/newjob', async (req, res) => {
    try {
      
      const { title, description, salary } = req.body;
      const job = await Job.create({ title, description, salary });
      console.log(job);
      res.status(201).json(job); 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
