const express = require('express');
const app = express();
const PORT = 8000;

app.get("/api", (req, res) => {
  res.json({
    "users": ["user1", "user2", "user3"]
  })
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})