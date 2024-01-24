import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>News Website</h3>

            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ margin: "0 4px" }}>
                <Link href="/">Home</Link>
              </div>
              <div style={{ margin: "0 4px" }}>
                <Link href="#">World</Link>
              </div>
              <div style={{ margin: "0 4px" }}>
                <Link href="#">Georgia</Link>
              </div>

              <div style={{ margin: "0 4px" }}>
                <Link href="#">Economy</Link>
              </div>

              <div style={{ margin: "0 4px" }}>
                <Link href="#">Agriculture</Link>
              </div>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}