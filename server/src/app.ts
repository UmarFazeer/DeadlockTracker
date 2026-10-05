// imports express, something that helps web building easier 
import express, { Request, Response } from "express";

// creates an instance of express and sets port. Assume port like door number, so when you go to localhost:3000
const app = express();
const port = 3000;

// defines what happens with someone visits the root URL. When a request is sent, respond with "Hello World!"
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// starts listening on port 3000, it tells the server to start accepting requests
app.listen(port, () => {
  console.log(`DeadlockTracker listening on port ${port}`);
});