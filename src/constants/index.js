const constants = {
  POSTGRES_VERSION: process.env.POSTGRES_VERSION,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  WEBSERVER_PORT: Number(process.env.WEBSERVER_PORT),
  POSTGRES_PORT: Number(process.env.POSTGRES_PORT),
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
};

module.exports = constants;
