const Sequelize = require('sequelize');
const { STRING, UUID, UUIDV4, DECIMAL } = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_schools_db');

const Student = conn.define('student', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  firstName: {
    type: STRING,
    allowNull: false
  },
  lastName: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
    gpa: {
      type: DECIMAL
    }
});

const School = conn.define('school', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING
  },
  url: {
    type: STRING
  }
});

Student.belongsTo(School);
School.hasMany(Student, {foreignKey: 'schoolId'})

const mapPromise = (items, model)=> {
  return Promise.all(items.map(item=> model.create(item)));
};

const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  const schools = [
    {name: 'Cal Poly'},
    {name: 'USC'},
    {name: 'MIT'}
  ];

  const [poly, usc, mit ] = await mapPromise(schools, School);

  const students = [
    {firstName: 'Matt',lastName: 'Garcia', email: 'matt@gmail.com', gpa: 3.5, schoolId: poly.id},
    {firstName: 'Brenda', lastName: 'Garcia', email: 'brenda@gmail.com', gpa: 4.0, schoolId: usc.id},
    {firstName: 'Mila', lastName: 'Garcia', email: 'mila@gmail.com', gpa: 4.0, schoolId: mit.id }
  ];
  const [matt, brenda, mila ]= await mapPromise(students, Student);

};

module.exports = {
  syncAndSeed,
  models: {
    Student,
    School
  }
};
