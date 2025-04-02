import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mind Shelf",
  description: "Page to store consumed content, create reviews, and give ratings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}