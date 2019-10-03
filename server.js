const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const {syncAndSeed, models } = require('./db');
const { Student, School } = models;

app.use('/dist/main.js', express.static(path.join(__dirname, 'dist/main.js')));

app.get('/', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/students', (req, res, next)=>{
  Student.findAll()
    .then(students=> res.send(students))
    .catch(next);
})
app.get('/api/schools', (req, res, next)=>{
  School.findAll()
    .then(schools=> res.send(schools))
    .catch(next);
})

syncAndSeed()
  .then(()=>{
    app.listen(port, ()=> console.log(`Listening on port ${port}`));
  });



