import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Head from 'next/head';
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Rindge Radical",
  description: "The News of Tomorrow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <style>
          {`
            html, body {
              background-color: white;
          }
          `}
        </style>
      </Head>
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
