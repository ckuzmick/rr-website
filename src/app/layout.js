import { Gabarito } from "next/font/google";
import "@/styles/globals.css";
import Head from 'next/head';
import Header from "@/components/header";

const gabarito = Gabarito({ subsets: ["latin"] });

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
      <body className={gabarito.className}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
