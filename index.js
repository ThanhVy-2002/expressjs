const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Validate form data
  if (!name || !email || !message) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  res.status(200).json({ message: "Thank you for contacting us!" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
