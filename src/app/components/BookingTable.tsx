import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";
import { EventClickArg } from "@fullcalendar/core";

export default function BookingTable() {
  const handleDateClick = (arg: DateClickArg) => {
    alert(arg.dateStr);
  };

  const handleEventClick = (arg: EventClickArg) => {
    alert(arg.event.title);
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
      eventClick={handleEventClick}
      dateClick={handleDateClick}
      displayEventTime={false}
      initialView="dayGridMonth"
      weekends={false}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "resourceTimelineWeek,dayGridMonth,timeGridWeek",
      }}
      events={[
        {
          id: "1",
          title: "April Fools",
          start: new Date("2025-04-01"),
          end: new Date("2025-04-01"),
          backgroundColor: "darkgreen",
          display: "block",
        },
        {
          title: "Tech Event",
          start: new Date("2025-04-21"),
          end: new Date("2025-04-21"),
          backgroundColor: "darkgreen",
          display: "block",
        },
      ]}
    />
  );
}
