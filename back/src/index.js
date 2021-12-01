const express = require("express");
const cors = require("cors");
const members = require("./data/members.json");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { name, email } = req.body;
  const AddNewUser = members.find((userName) => userName.name == name);
  try {
    if (!AddNewUser) {
      members.push({
        name: name,
        email: email,
      });
    } else {
      console.log("User already exists!");
    }
    res.json(members);
  } catch (err) {
    console.log(err);
  }
});

app.get("/", (req, res) => {
  return res.json(members);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
