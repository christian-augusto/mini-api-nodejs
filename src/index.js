const Express = require("express");

const { WEBSERVER_PORT } = require("./constants");
const studentsController = require("./controllers/students");

const app = Express();

app.get("/health-checker", function (req, res) {
  return res.status(200).json({ message: "success" });
});

app.use("/students", studentsController);

app.listen(WEBSERVER_PORT, function () {
  console.log(`webserver running at port ${WEBSERVER_PORT}`);
});
