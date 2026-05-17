const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Mujtaba, Node.js app deployed using Docker and Jenkins CI/CD!");
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "node-devops-cicd-app"
  });
});

app.get("/version", (req, res) => {
  res.json({
    version: "1.0.0",
    message: "Initial CI/CD deployment successful"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
