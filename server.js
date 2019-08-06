const express = require("express"); //Common JS syntax for importing express

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the ContactsOrganizer API" })
);

// Define backend routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
