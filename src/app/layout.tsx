import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css"; 
import { ToastContainer } from "react-toastify";



const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800"], // choose weights you need
});

export const metadata: Metadata = {
  title: "ChatBot",
  description: "Simple ChatBot",
   icons: {
    icon: "/logo.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased`}
      >
        {children}
        <ToastContainer position="top-center"/>
      </body>
    </html>
  );
}
