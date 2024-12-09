import Nav from "@/components/nav";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* const font = localFont({
  src: "",
  variable: "",
  weight: "",
}); */

export const metadata: Metadata = {
  title: "Ilyas.coffee",
  description: "...",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        <main className="center h-screen w-full">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
