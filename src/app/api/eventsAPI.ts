const API_URL = "http://localhost:8000/events";

export const fetchEvents = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch events data");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
