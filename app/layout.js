import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "bitlinks - Professional URL Shortener",
  description: "Shorten, track, and share URLs with Bitlink - the professional URL shortener.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-50 dark:text-white`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
