// const API_URL = "http://localhost:8000/events";
import { openDb } from "../db";
import { Event } from "../../stores/eventStore";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // const response = await fetch(API_URL);
    // if (!response.ok) {
    //   throw new Error("Failed to fetch events data");
    // }

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
