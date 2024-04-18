const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.send("ola mundoo");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
