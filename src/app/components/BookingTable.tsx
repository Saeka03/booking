import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";
import { EventClickArg } from "@fullcalendar/core";

type BookingTableProps = {
  openModalHandler: (arg: EventClickArg) => void;
};

export default function BookingTable({ openModalHandler }: BookingTableProps) {
  const aprilFools = new Date("2025-04-01");
  const aprilFoolsOffset = aprilFools.getTimezoneOffset();
  const aprilFoolsLocal = new Date(
    aprilFools.getTime() + aprilFoolsOffset * 60000
  );

  const techEvent = new Date("2025-04-21");
  const techEventOffset = techEvent.getTimezoneOffset();
  const techEventLocal = new Date(
    techEvent.getTime() + techEventOffset * 60000
  );

  const event1 = {
    id: "0",
    title: "April Fools",
    start: aprilFoolsLocal,
    end: aprilFoolsLocal,
    backgroundColor: "darkgreen",
    display: "block",
  };
  const event2 = {
    id: "1",
    title: "Tech Event",
    start: techEventLocal,
    end: techEventLocal,
    backgroundColor: "darkgreen",
    display: "block",
  };

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
      events={[event1, event2]}
    />
  );
}
