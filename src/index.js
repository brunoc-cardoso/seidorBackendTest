import express from "express";
import routes from "./routes/index.js";

const PORT = 3333;
const server = express();

server.use(express.json());
server.use(routes);

server.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
