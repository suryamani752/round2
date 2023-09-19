const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
  const requestData = req.body.data;
  const numbers = [];
  const alphabets = [];

  requestData.forEach((item) => {
    if (/[a-zA-Z]/.test(item)) {
      alphabets.push(item);
    } else if (/[0-9]/.test(item)) {
      numbers.push(item);
    } else {
      res.status(400).json({
        is_sucess: false,
        message: "Invalid user input",
      });
    }
  });

  const user_id = "suryamani_kumar07052002";
  const email = "suryamani.kumar2020@vitbhopal.ac.in";
  const roll_number = "20BCE10080";

  const highest_alphabet = alphabets.reduce(
    (max, current) => (max > current ? max : current),
    ""
  );
  const response = {
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet,
  };

  res.json(response);
});

app.get("/bfhl", (req, res) => {
  const operation_code = 1;

  res.json({ operation_code });
});

const port = process.env.PORT || 7520;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
