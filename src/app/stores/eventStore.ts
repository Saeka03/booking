import { create } from "zustand";

type EventStoreState = {
  events: {
    title?: string;
    date?: Date;
  };
  setEvent: (title: string, date: Date) => void;
};

export const useEventStore = create<EventStoreState>()((set) => ({
  events: {},
  setEvent: (title, date) => {
    set({ events: { title, date } });
  },
}));
