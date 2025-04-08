import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";
import { EventClickArg } from "@fullcalendar/core";
import { useEffect, useState } from "react";
import { fetchEvents } from "../api/eventsAPI";

type BookingTableProps = {
  openModalHandler: (arg: EventClickArg) => void;
};

export default function BookingTable({ openModalHandler }: BookingTableProps) {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (err) {
        console.error(err);
      }
    };

    getEvents();
  }, []);

  return (
    <FullCalendar
      timeZone="America/Los_Angeles"
      plugins={[
        resourceTimelinePlugin,
        dayGridPlugin,
        interactionPlugin,
        timeGridPlugin,
      ]}
      eventClick={openModalHandler}
      displayEventTime={false}
      initialView="dayGridMonth"
      weekends={false}
      headerToolbar={{
        left: "",
        center: "title",
        right: "prev,next today",
      }}
      events={events}
    />
  );
}
