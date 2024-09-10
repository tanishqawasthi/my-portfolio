import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tanishq's Portfolio",
  description: "A full stack developer looking to learn and grow.",
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark h-[200vh]">{children}</body>
    </html>
  );
}
