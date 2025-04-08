import { createContext, useContext, useState } from "react";

type Event = {
  title: string;
  date: Date;
};

type EventContextType = {
  event?: Event;
  eventHandler: (title: string, date: Date) => void;
};

const EventContext = createContext<EventContextType | undefined>(undefined);

export const useEvent = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEvent must be used within an EventProvider");
  }
  return context;
};

export const EventProvider = ({ children }: { children: React.ReactNode }) => {
  const [event, setEvent] = useState<Event>();

  const eventHandler = (title: string, date: Date) => {
    setEvent({
      title,
      date,
    });
  };

  return (
    <EventContext.Provider value={{ event, eventHandler }}>
      {children}
    </EventContext.Provider>
  );
};
