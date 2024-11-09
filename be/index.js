const express = require("express");
const app = express();
const cors = require("cors");

// middleware for json
app.use(express.json());
app.use(cors());

let db = [
  {
    name: "Krins",
    scroll: 1,
    tier: "Gold",
  },
];

app.get("/getboard", (req, res) => {
  res.send(db);
});

app.post("/addUser", (req, res) => {
  const userInfo = req.body;
  db.push(userInfo.user);
  db = sortDb();
  res.send(db);
});

app.post("/updateBoard", (req, res) => {
  const userInfo = req.body;
  // remove the user from the db
  db = db.filter((user) => user.name !== userInfo.user.name);
  db.push(userInfo.user);
  db = sortDb();
  res.send(db);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

function sortDb() {
  db.sort((a, b) => {
    return (a.scroll - b.scroll) * -1;
  });

  // for all the users in the db, assign them a default tier
  db.forEach((user) => {
    user.tier = "";
  });

  if (db.length >= 1) {
    db[0].tier = "Gold";
  }
  if (db.length >= 2) {
    db[1].tier = "Silver";
  }
  if (db.length >= 3) {
    db[2].tier = "Bronze";
  }
  return db;
}
