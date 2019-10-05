const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const {syncAndSeed, models } = require('./db');
const { Student, School } = models;

app.use(express.json());
app.use('/dist/main.js', express.static(path.join(__dirname, 'dist/main.js')));

app.get('/', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/students', (req, res, next)=>{
  Student.findAll()
    .then(students=> res.send(students))
    .catch(next);
});
app.get('/api/schools', (req, res, next)=>{

  School.findAll()
    .then(schools=> res.send(schools))
    .catch(next);
});

app.post('/api/students', async (req, res, next)=> {
  try {
    res.status(201).send (await Student.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gpa: req.body.gpa
      }))

  } catch (ex) {
    next(ex)
  }
})

app.delete('/api/students/:id', async (req, res, next)=> {
  try {
    await Student.destroy({
      where: {
        id: req.params.id
      }
    });
    res.sendStatus(204);
  }
  catch(ex){
    next(ex)
  }
})

syncAndSeed()
  .then(()=>{
    app.listen(port, ()=> console.log(`Listening on port ${port}`));
  });



