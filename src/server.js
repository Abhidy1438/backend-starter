import http from "http";
import { app } from "./app.js";
import "dotenv/config";
import { connectDB } from "./db/db.connect.js";

const server = http.createServer(app);

const PORT = process.env.port;

server.listen(PORT, () => {
  connectDB();
  console.log(`server is running port ${PORT}`);
});
