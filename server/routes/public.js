const express = require("express");
const router = express.Router();
const skillController = require("../controllers/skillController");
const projectController = require("../controllers/projectController");
const contactController = require("../controllers/contactController");
const certificationController = require("../controllers/certificationController");
const { contactLimiter } = require("../middleware/rateLimiter");

const fs = require("fs");
const path = require("path");

router.get("/currently", (req, res) => {
  try {
    const filePath = path.join(__dirname, "../data/currently.json");
    if (!fs.existsSync(filePath))
      return res.json({ success: true, data: "Building something new" });
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    res.json({
      success: true,
      data: data.currently || "Building something new",
    });
  } catch {
    res.json({ success: true, data: "Building something new" });
  }
});

router.get("/skills", skillController.getAll);
router.get("/projects", projectController.getAll);
router.get("/certifications", certificationController.getAll);
router.post("/contact", contactLimiter, contactController.send);

// Test route commented out for now
// router.get('/test', (req, res) => {
//   res.json({ message: 'API is working' })
// })

module.exports = router;
