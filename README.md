# student-mentor-management

**CREATE STUDENT DOCUMENTATION** 

var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://localhost:4000/student',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify([
    {
      "id": "4",
      "student_name": "manisha",
      "mentor_name": "Anjali"
    },
    {
      "id": "5",
      "student_name": "suresh",
      "mentor_name": "Anjali"
    }
  ])

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});





**CREATE MENTOR DOCUMENTATION**

var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://localhost:4000/mentor',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify([
    {
      "id": "1",
      "mentor_name": "anjali",
      "students": []
    },
    {
      "id": "2",
      "mentor_name": "saran",
      "students": [
        "gana"
      ]
    },
    {
      "id": "3",
      "mentor_name": "varun",
      "students": [
        "sana",
        "dhana"
      ]
    }
  ])

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});



**ASSIGNING MENTOR TO STUDENTS**

var request = require('request');
var options = {
  'method': 'PUT',
  'url': 'http://localhost:4000/Assign_Mentor/3',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "mentor_name": "varun"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


**GET ALL STUDENTS DOCUMENTATION**

var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://localhost:4000/allstudents',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "id": "1",
    "mentorName": "Arun",
    "batch": 34,
    "course": "full stack"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
