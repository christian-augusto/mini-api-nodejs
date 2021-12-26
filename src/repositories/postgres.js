const Knex = require("knex");

const {
  POSTGRES_VERSION,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
} = require("../constants");

class Postgres {
  #_connection;

  constructor() {
    this.#_connection = null;
  }

  async getStudent(studentId) {
    try {
      const data = await this.#connection().select("*").from("students").where({ id: studentId });

      return data;
    } catch (error) {
      throw error;
    }
  }

  async createStudent(student_params) {
    try {
      await this.#connection().insert(student_params).into("students");
    } catch (error) {
      throw error;
    }
  }

  async listStudents(limit, offset) {
    try {
      const data = await this.#connection().select("*").from("students").limit(limit).offset(offset);

      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteStudent(studentId) {
    try {
      await this.#connection().delete().from("students").where({ id: studentId });
    } catch (error) {
      throw error;
    }
  }

  #config() {
    return {
      client: "pg",
      version: POSTGRES_VERSION,
      connection: {
        host: POSTGRES_HOST,
        port: POSTGRES_PORT,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        database: POSTGRES_DATABASE,
      },
    };
  }

  #connection() {
    if (this.#_connection == null) {
      this.#_connection = Knex(this.#config());
    }

    return this.#_connection;
  }
}

module.exports = Postgres;
