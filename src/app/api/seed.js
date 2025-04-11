// pages/api/seed.js

import { openDb } from "./db.js";

async function setup() {
  // Open SQLite connection
  const db = await openDb();

  // Define table schema
  await db.exec(`
    CREATE TABLE events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,  
      title TEXT,
      start TEXT,
      end TEXT,
      display TEXT  
    );
  `);

  // Insert dummy data
  // await db.run(
  //   "INSERT INTO events (title, start, end, display) VALUES (?, ?, ?, ?)",
  //   "April Fools",
  //   "2025-04-01",
  //   "2025-04-01",
  //   "block"
  // );

  // Close connection
  await db.close();
}

setup().catch((err) => {
  console.error(err.message);
});
