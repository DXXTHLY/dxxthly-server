const WebSocket = require("ws");

const port = process.env.PORT || 3000;
const wss = new WebSocket.Server({ port });

wss.on("connection", ws => {
  console.log("Player connected");

  ws.on("message", msg => {
    ws.send(msg); // echo back for now
  });
});

console.log("Server running on port", port);
