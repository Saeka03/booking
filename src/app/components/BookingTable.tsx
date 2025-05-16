import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";
import { EventClickArg } from "@fullcalendar/core";
import { useEffect, useState } from "react";
import styles from "./BookingTable.module.scss";
import { Event } from "../stores/eventStore";
import Link from "next/link";

type BookingTableProps = {
  openModalHandler: (arg: EventClickArg) => void;
  isUser: boolean;
};

export default function BookingTable({
  openModalHandler,
  isUser,
}: BookingTableProps) {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await fetch("/api/events");
        const data = await res.json();

        console.log(data);

        if (!data) {
          return;
        }
        setEvents(data);
      } catch (err) {
        console.error(err);
      }
    };

    getEvents();
  }, []);

  return (
    <div className={styles.calendar}>
      <FullCalendar
        timeZone="America/Los_Angeles"
        plugins={[
          resourceTimelinePlugin,
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin,
        ]}
        eventClick={openModalHandler}
        eventClassNames={() => styles.eventContainer}
        displayEventTime={false}
        initialView="dayGridMonth"
        weekends={false}
        headerToolbar={{
          left: "",
          center: "title",
          right: "prev,next today",
        }}
        events={events}
        eventColor="#03440c"
      />
      {isUser ? (
        <Link href="/addEvent">
          <button>Add Event</button>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}
