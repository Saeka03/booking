import { openDb } from "../../db";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;

    // Open database
    const db = await openDb();

    const deleteEvent = await db.run(`DELETE FROM events WHERE id = ${id}`);

    return NextResponse.json(deleteEvent);
  } catch (err) {
    console.log(err);
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;

    // Open database
    const db = await openDb();

    const body = await req.json();
    const newEvent = await db.run(
      `UPDATE events SET title = '${body.title}', start = '${body.start}', end = '${body.end}', display = '${body.display}' WHERE id = ${id}`
    );

    return NextResponse.json(newEvent);
  } catch (err) {
    console.log(err);
  }
}
