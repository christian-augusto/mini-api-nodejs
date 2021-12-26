const Express = require("express");

const Postgres = require("../../repositories/postgres");

const router = Express.Router();
const jsonParser = Express.json();

router.get("/", function (req, res) {
  (async function () {
    try {
      const db = new Postgres();

      const { limit, offset } = req.query;

      const data = await db.listStudents(Number(limit), Number(offset));

      return res.status(200).json({ data }).end();
    } catch (error) {
      console.error(`Error in studentsController GET / ${error}`);

      return res.status(400).json({ message: "Error in list students" }).end();
    }
  })();
});

router.get("/:studentId", function (req, res) {
  (async function () {
    try {
      const db = new Postgres();

      const data = await db.getStudent(Number(req.params.studentId));

      return res.json({ data }).end();
    } catch (error) {
      console.error(`Error in studentsController GET /:studentId ${error}`);

      return res.status(400).json({ message: "Error in delete student" }).end();
    }
  })();
});

router.post("/", jsonParser, function (req, res) {
  (async function () {
    try {
      const db = new Postgres();

      await db.createStudent(req.body);

      return res.status(201).end();
    } catch (error) {
      console.error(`Error in studentsController POST / ${error}`);

      return res.status(400).json({ message: "Error in create student" }).end();
    }
  })();
});

router.delete("/:studentId", function (req, res) {
  (async function () {
    try {
      const db = new Postgres();

      await db.deleteStudent(Number(req.params.studentId));

      return res.status(200).end();
    } catch (error) {
      console.error(`Error in studentsController DELETE /:studentId ${error}`);

      return res.status(400).json({ message: "Error in delete student" }).end();
    }
  })();
});

module.exports = router;
