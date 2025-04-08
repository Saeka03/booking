"use client";

import Contents from "./components/Contents";
import { EventProvider } from "./contexts/eventContext";

export default function Home() {
  return (
    <EventProvider>
      <Contents />
    </EventProvider>
  );
}
