import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Developer | Codenatic",
  description: "Website dibuat untuk memenuhi salah ",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${inter.className} bg-[#F9F9F9]`}>{children}</body>
    </html>
  );
}
