// const API_URL = "http://localhost:8000/events";
import { openDb } from "../db";
import { Event } from "../../stores/eventStore";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Open database
    const db = await openDb();

    // Get posts from database
    const data: Event[] = await db.all("SELECT * FROM events");

    // Pass posts as prop to component
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.log(err);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Open database
    const db = await openDb();

    const newEvent = await db.run(
      "INSERT INTO events (title, start, end, display) VALUES (?, ?, ?, ?)",
      body.title,
      body.start,
      body.end,
      body.display
    );

    // // Get posts from database
    // const data: Event[] = await db.all("SELECT * FROM events");

    // Pass posts as prop to component
    return NextResponse.json(newEvent);
  } catch (err) {
    console.log(err);
  }
}
