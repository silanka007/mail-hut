const http = require("http");
const app = require("./src/app");
const { mongoConnect } = require("./src/services/mongo");

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

const serverInit = async () => {
  await mongoConnect();
  server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
  });
};

serverInit()
