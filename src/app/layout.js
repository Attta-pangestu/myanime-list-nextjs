import { Inter } from "next/font/google";
import "./globals.css";
// component
import Navbar from "../components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MY ANIME LIST",
  description: "List of my favorite animes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
