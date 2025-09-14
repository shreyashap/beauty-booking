import { Booking } from "../types";

const STORAGE_KEY = "userBookings";

export function getBookings(): Booking[] {
  try {
    if (typeof window === "undefined") return [];
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Booking[]) : [];
  } catch (e) {
    console.error("getBookings error:", e);
    return [];
  }
}

export function saveBookings(bookings: Booking[]) {
  try {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    window.dispatchEvent(new Event("bookings-updated"));
  } catch (e) {
    console.error("saveBookings error:", e);
  }
}

export function addBooking(b: Booking) {
  const list = getBookings();
  list.unshift(b);
  saveBookings(list);
}

export function removeBooking(id: string) {
  const list = getBookings().filter((x) => x.id !== id);
  saveBookings(list);
}

export function clearBookings() {
  try {
    if (typeof window === "undefined") return;
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event("bookings-updated"));
  } catch (e) {
    console.error(e);
  }
}
