// DataBase for Zen Class
// 1.users
db.users.insertMany([
  {
    name: "prasanth",
    batch: "B45WD",
    qualification: "B.E",
    experience: 2,
    mentor: "sanjay",
    taskCompletion: 75,
    gender: "male",
  },
  {
    name: "Ajay",
    batch: "B42WD",
    qualification: "BCA",
    experience: 5,
    mentor: "mohan",
    taskCompletion: 80,
    gender: "male",
  },
  {
    name: "Abdur",
    batch: "B43WD",
    qualification: "BCA",
    mentor: "ramya",
    experience: 3,
    taskCompletion: 55,
    gender: "male",
  },
  {
    name: "Anitha",
    batch: "B40WD",
    qualification: "B.COM",
    mentor: "prashanth",
    experience: 1,
    taskCompletion: 45,
    gender: "female",
  },
  {
    name: "Anirutha",
    batch: "B41WD",
    qualification: "BSC",
    experience: 4,
    mentor: "sanjay",
    taskCompletion: 90,
    gender: "female",
  },
  {
    name: "sivakumar",
    batch: "B45WD",
    qualification: "B.E",
    experience: 2,
    mentor: "mohan",
    taskCompletion: 65,
    gender: "male",
  },
  {
    name: "Aswin",
    batch: "B42WD",
    qualification: "BCA",
    experience: 5,
    mentor: "ramya",
    taskCompletion: 80,
    gender: "male",
  },
  {
    name: "Balaji",
    batch: "B43WD",
    qualification: "BCA",
    experience: 3,
    mentor: "mohan",
    taskCompletion: 55,
    gender: "male",
  },
  {
    name: "Vijipriya",
    batch: "B40WD",
    qualification: "B.COM",
    mentor: "sanjay",
    experience: 1,
    taskCompletion: 45,
    gender: "female",
  },
  {
    name: "Sharmila",
    batch: "B41WD",
    qualification: "BSC",
    mentor: "ramya",
    experience: 4,
    taskCompletion: 90,
    gender: "female",
  },
  {
    name: "Venkat",
    batch: "B45WD",
    qualification: "B.E",
    experience: 2,
    mentor: "sanjay",
    taskCompletion: 55,
    gender: "male",
  },
  {
    name: "Jeeva",
    batch: "B42WD",
    qualification: "BCA",
    experience: 5,
    mentor: "ramya",
    taskCompletion: 60,
    gender: "male",
  },
  {
    name: "Sathya",
    batch: "B43WD",
    qualification: "BCA",
    experience: 4,
    mentor: "mohan",
    taskCompletion: 55,
    gender: "male",
  },
  {
    name: "Anitha",
    batch: "B40WD",
    qualification: "B.COM",
    mentor: "sanjay",
    experience: 1,
    taskCompletion: 45,
    gender: "female",
  },
  {
    name: "Anirutha",
    batch: "B41WD",
    qualification: "BSC",
    experience: 4,
    mentor: "sanjay",
    taskCompletion: 90,
    gender: "female",
  },
  {
    name: "Vimal",
    batch: "B45WD",
    qualification: "B.E",
    experience: 2,
    mentor: "mohan",
    taskCompletion: 75,
    gender: "male",
  },
  {
    name: "Nalin",
    batch: "B42WD",
    qualification: "BCA",
    experience: 5,
    mentor: "ramya",
    taskCompletion: 80,
    gender: "male",
  },
  {
    name: "Navin",
    batch: "B43WD",
    qualification: "BCA",
    experience: 3,
    mentor: "mohan",
    taskCompletion: 55,
    gender: "male",
  },
  {
    name: "Radhika",
    batch: "B40WD",
    qualification: "B.COM",
    experience: 1,
    mentor: "sanjay",
    taskCompletion: 45,
    gender: "female",
  },
  {
    name: "Ramya",
    batch: "B41WD",
    qualification: "BSC",
    experience: 4,
    mentor: "sanjay",
    taskCompletion: 90,
    gender: "female",
  },
  {
    name: "Jeeva",
    batch: "B45WD",
    qualification: "B.E",
    experience: 2,
    mentor: "mohan",
    taskCompletion: 75,
    gender: "male",
  },
  {
    name: "srider",
    batch: "B42WD",
    qualification: "BCA",
    experience: 5,
    mentor: "mohan",
    taskCompletion: 80,
    gender: "male",
  },
  {
    name: "Sathya",
    batch: "B43WD",
    qualification: "BCA",
    experience: 3,
    mentor: "mohan",
    taskCompletion: 55,
    gender: "male",
  },
  {
    name: "Anitha Kaladharan",
    batch: "B40WD",
    qualification: "B.COM",
    experience: 1,
    mentor: "ramya",
    taskCompletion: 45,
    gender: "female",
  },
  {
    name: "Aswini",
    batch: "B41WD",
    qualification: "BSC",
    experience: 4,
    mentor: "ramya",
    taskCompletion: 90,
    gender: "female",
  },
]);

// 2.codekata

db.codekata.insertMany([
  {
    name: "Aswini",
    solved: "258",
  },
  {
    name: "Sathya",
    solved: "224",
  },
  {
    name: "srider",
    solved: "145",
  },
  {
    name: "Radhika",
    solved: "153",
  },
  {
    name: "Sanjay",
    solved: "210",
  },
]);

// 3.attendance

db.attendance.insertMany([
  {
    name: "Balaji",
    attendance: "absent",
    date: "20/oct/2022",
  },
  {
    name: "Sanjay",
    attendance: "absent",
    date: "20/oct/2022",
  },
  {
    name: "Aswin",
    attendance: "present",
    date: "20/oct/2022",
  },
  {
    name: "Radhika",
    attendance: "present",
    date: "20/oct/2022",
  },
  {
    name: "srider",
    attendance: "present",
    date: "20/oct/2022",
  },

  {
    name: "Balaji",
    attendance: "absent",
    date: "21/oct/2022",
  },
  {
    name: "Sanjay",
    attendance: "absent",
    date: "21/oct/2022",
  },
  {
    name: "Aswin",
    attendance: "absent",
    date: "21/oct/2022",
  },
  {
    name: "Radhika",
    attendance: "present",
    date: "21/oct/2022",
  },
  {
    name: "srider",
    attendance: "absent",
    date: "21/oct/2022",
  },
]);

// 4.topics

db.topics.insertMany([
  {
    date: "20/oct/2022",
    topics: "axios,db",
    month: "october",
  },
  {
    date: "21/oct/2022",
    topics: "React-router",
    month: "october",
  },
  {
    date: "22/oct/2022",
    topics: "Reducer",
    month: "october",
  },
  {
    date: "23/oct/2022",
    topics: "context-Api",
    month: "october",
  },
  {
    date: "24/oct/2022",
    topics: "redux",
    month: "october",
  },
  {
    date: "25/oct/2022",
    topics: "fetch-Api",
    month: "october",
  },
]);

// 5.tasks

db.task.insertMany([
  {
    name: "Sanjay",
    task: "fetch-API",
    submitted: false,
    date: "20/jul/2022",
    month: "october",
  },
  {
    name: "Radhika",
    task: "fetch-API",
    submitted: true,
    date: "25/oct/2022",
    month: "july",
  },
  {
    name: "srider",
    task: "database-creation",
    submitted: true,
    date: "20/oct/2022",
    month: "october",
  },
  {
    name: "Aswin",
    task: "fetch-API",
    submitted: false,
    date: "21/oct/2022",
    month: "june",
  },
  {
    name: "Balaji",
    task: "fetch-API",
    submitted: false,
    date: "13/jan/2022",
    month: "october",
  },
]);

// 6.company Drives

db.drives.insertMany([
  {
    company: "Bytize",
    students: ["Sanjay", "srider"],
    date: "12/march/2023",
  },
  {
    company: "theecode",
    students: ["Radhika", "Aswin"],
    date: "25/oct/2023",
  },
  {
    company: "tenz",
    students: ["Balaji", "Sanjay"],
    date: "29/march/2023",
  },
  {
    company: "guvi",
    students: ["Sanjay"],
    date: "21/oct/2023",
  },
  {
    company: "7gtech",
    students: ["Balaji", "srider"],
    date: "01/oct/2023",
  },
]);

// 7.mentors

db.mentor.insertMany([
  {
    mentor: "sanjay",
    mentee_count: 50,
  },
  {
    mentor: "mohan",
    mentee_count: 23,
  },
  {
    mentor: "ramya",
    mentee_count: 53,
  },
  {
    mentor: "prashanth",
    mentee_count: 32,
  },
]);

// QUERIES

// 1.Find all the topics and tasks which are thought in the month of October

db.task.aggregate([
  {
    $lookup: {
      from: "topics",
      localField: "month",
      foreignField: "month",
      as: "october",
    },
  },
  {
    $match: {
      month: "october",
    },
  },
]);

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.drives.find({ date: { $gte: "01/oct/2023", $lte: "30/oct/2023" } });

// Find all the company drives and students who are appeared for the placement.
db.drives.find({});

// Find the number of problems solved by the user in codekata
db.codekata.find({ name: "user name" });

// Find all the mentors with who has the mentee's count more than 15
db.mentor.find({ mentee_count: { $gte: 16 } });
