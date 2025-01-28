import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import ReduxProvider from "@/components/ReduxProvider";

// const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "shoping on Line",
  description: "electrice products for prograer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` `}>
        <Header />
        <ToastContainer theme="colored" position="top-center" />
        {/* <main>{children}</main> */}
        <ReduxProvider>{children}</ReduxProvider>
        <Footer />
      </body>
    </html>
  );
}
