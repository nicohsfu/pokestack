const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    "pokemon": ["pokemon1", "pokemon2", "pokemon3"]
  })
});

module.exports = router;