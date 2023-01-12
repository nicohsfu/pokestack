const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    "trainers": ["trainer1", "trainer2", "trainer3"]
  })
});

module.exports = router;