import { create } from "zustand";

export type Event = {
  title?: string;
  date?: Date;
};

type EventStoreState = {
  events: Event;
  setEvent: (title: string, date: Date) => void;
};

export const useEventStore = create<EventStoreState>()((set) => ({
  events: {},
  setEvent: (title, date) => {
    set({ events: { title, date } });
  },
}));
