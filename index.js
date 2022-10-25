import express from "express";
import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";
dotenv.config();

const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("student management");
});

const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("mongodb connected");
  return client;
}

const client = await createConnection();

app.post("/mentor", async function (req, res) {
  try {
    const input = req.body;
    const inputMentor = await client
      .db("Student_Mentor_Assignment")
      .collection("Mentor")
      .insertMany(input);
    res.status(200).send(inputMentor).json({ Message: "Mentor is Created" });
  } catch (error) {
    res.status(500).json({ Message: "Something went wrong" });
    console.log(error);
  }
});

app.post("/student", async function (req, res) {
  try {
    const input = req.body;
    const inputStudent = await client
      .db("Student_Mentor_Assignment")
      .collection("Student")
      .insertMany(input);
    res.status(200).send(inputStudent).json({ Message: "Student is Created" });
  } catch (error) {
    res.status(500).json({ Message: "Something went wrong" });
    console.log(error);
  }
});

app.get("/mentor/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const mentorId = await client
      .db("Student_Mentor_Assignment")
      .collection("Mentor")
      .findOne({ id: id });
    res.send(mentorId);
  } catch (error) {
    res.status(500).json({ Message: "Something Went Wrong" });
    console.log(error);
  }
});

app.get("/student/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const studentId = await client
      .db("Student_Mentor_Assignment")
      .collection("Student")
      .findOne({ id: id });
    res.send(studentId);
  } catch (error) {
    res.status(500).json({ Message: "Something Went Wrong" });
    console.log(error);
  }
});

app.put("/Assign_Mentor/:id", async function (req, res) {
  try {
    const input = req.body;
    const { id } = req.params;
    const assignMentor = await client
      .db("Student_Mentor_Assignment")
      .collection("Student")
      .updateOne({ id: id }, { $set: input });

    res.send(assignMentor);
  } catch (error) {
    res.status(500).json({ Message: "Something Went wrong" });
    console.log(error);
  }
});


app.get("/allstudents", async function (req, res) {
  const result = await client
    .db("Student_Mentor_Assignment")
    .collection("Student")
    .find({})
    .toArray();
  res.send(result);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app started in ${port}`);
});


