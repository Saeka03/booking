"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";

function addEvent() {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("yyyy-mm-dd");

  const titleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const dateHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = "http://localhost:3000/api/events";
    const data = {
      title: title,
      start: new Date(date),
      end: new Date(date),
      display: "block",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Faile to post the event.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      Add a title and select a date.
      <form onSubmit={submitHandler}>
        <label htmlFor="title">
          title
          <input type="text" onChange={titleHandler} value={title} />
        </label>
        <label htmlFor="title">
          date
          <input type="date" onChange={dateHandler} value={date} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default addEvent;
