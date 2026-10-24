
import express, { Request, Response } from "express";
import DeadlockServices from "./services/DeadlockServices";
import cors from "cors";


// ==================================================
// 1. SERVER SETUP
// ==================================================

// Creates an Express application
const app = express();

// Allows our React frontend to communicate with Express
app.use(cors({
  origin: "http://localhost:5173"
}));

// Backend runs on port 3000
const port = 3000;

// const deadlockServices = new DeadlockServices();


// ==================================================
// 2. TEST ROUTES
// ==================================================

// Returns Hello World when visiting localhost:3000
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Test API endpoint
app.get("/api/victor", (req: Request, res: Response) => {
  res.json({ message: "Hello from the API!" });
});


// ==================================================
// 3. HERO STATISTICS ROUTE
// ==================================================

// Receives Account ID and Hero ID from frontend
app.get("/api/hero-stats", (req: Request, res: Response) => {

  // Gets Account ID from and Hero ID from the URL
  const accountId = Number(req.query.accountId);
  const heroId = Number(req.query.heroId);

  console.log("Received Account ID:", accountId);
  console.log("Received Hero ID:", heroId);

  // Sends confirmation to frontend
  res.json({ accountId, heroId }); // MODIFIED: includes heroId
});


// ==================================================
// 4. START SERVER
// ==================================================

// Starts accepting requests on port 3000
app.listen(port, () => {
  console.log(`DeadlockTracker listening on port ${port}`);
});
