const express = require("express");

const { Client } = require("node-appwrite");

const http = require("http");

const PORT = 3000;
const app = express();

async function startServer() {
  try {
    // Connect to MongoDB
    //   await client.connect();
    const appWriteClient = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite Endpoint
      .setProject("[64c4aba3341772bfa2fd]") // Your project ID
      .setKey(
        "b7e11d2963802b47d6c0d5b21e1026fb329f04a11085e891e3280c9285f25ed510b8b2d5cf0c138f66dc720ae1069bc0440498a6cf43064e7ac1c084fbf179643d791a04742546ecf6691a74138d1a7d0a7b8875da93b2e2a8c5ffe22c112dfb58985f57c129de245d8da558071519067ca78e92c7ca3d30047b88a32bf9b743"
      ); // Your secret API key

    console.log("Connected to Appwrite" + appWriteClient);

    // Start Express server
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Error starting the server:", err);
  }
}

startServer();
// const server = http.createServer((req, res) => {
//   // Set the response header
//   res.writeHead(200, { "Content-Type": "text/plain" });

//   // Write the response body
//   res.end("Hello, World!\n");
// });

// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}...`);
// });
