import express from "express";
import cors from "cors";

const app = express();
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
  ],
};

app.use(cors(corsOptions));
app.use(express.json());

//Route 1
app.get("/", (req, res) => {
  res.send("Hello Boi, I am your father!");
});

let members = [];

//Route 2
app.post("/members", (req, res) => {
  const { name, lastname, position } = req.body;

  const newMember = {
    id: String(members.length + 1),
    name: name,
    lastname: lastname,
    position: position,
  };

  members.push(newMember);

  res.status(201).json(newMember);
});

//Route 3
app.get("/members", (req, res) => {
  res.status(200).json(members);
});

//Route 4
app.delete("/members/:id", (req, res) => {
  const memberId = req.params.id;

  const memberIndex = members.findIndex((member) => member.id === memberId);

  if (memberIndex !== -1) {
    members.splice(memberIndex, 1);

    res.status(200).send(`Member with ID ${memberId} delete!`);
  } else {
    res.status(404).send("Member not found");
  }
});

//Route 5
app.put("/members/:id", (req, res) => {
  const memberId = req.params.id;

  const { name, lastname, position } = req.body;

  const member = members.find((m) => m.id === memberId);

  if (member) {
    if (name !== undefined) member.name = name;
    if (lastname !== undefined) member.lastname = lastname;
    if (position !== undefined) member.position = position;

    res.status(200).json(member);
  } else {
    res.status(404).send("Member not found");
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server walking on port ${PORT}`);
});
