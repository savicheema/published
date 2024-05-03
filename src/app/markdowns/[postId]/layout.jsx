import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dominica News",
  description: "Your source for all the latest news on Dominica",
};

export default function RootLayout({ children }) {
  return <div className={inter.className}>{children}</div>;
}
