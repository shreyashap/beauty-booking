import type { Metadata } from "next";
import "../globals.css";
import AppNavbar from "@/components/AppNavbar";
import AppFooter from "@/components/AppFooter";

export const metadata: Metadata = {
  title: "Booking Page",
  description: "Book your artist",
};

export default function ArtistsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <AppNavbar />
      {children}
      <AppFooter />
    </section>
  );
}
