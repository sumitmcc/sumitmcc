import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Provider from '@/components/ui/Provider'; 
import Navbar from "@/components/layout/Navbar"; 
import Head from "next/head";
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';



const montserrat = Montserrat({
  weight:"300",
  subsets:['latin']
});



export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image"/>
        <ColorSchemeScript />
      </Head>
      <body
        className={`${montserrat.className} antialiased light-gradient dark:dark-gradient`}
      >
        {/* Provide global context or theme */}
        <Provider>
          {/* Navbar appears on every page */}
          <Navbar />
          
          {/* Main content */}
          <MantineProvider>
          <main className="container mx-auto ">
            {children}
          </main>
          </MantineProvider>
          
        </Provider>
      </body>
    </html>
  );
}
