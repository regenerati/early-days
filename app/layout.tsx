import type React from "react"
import "@/app/globals.css"
import "@/styles/header-bg.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Head from "next/head"
import type { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Early Days with Chelsea',
  description: 'Compassionate doula support for birth and postpartum.',
  openGraph: {
    title: 'Early Days with Chelsea',
    description: 'Compassionate doula support for birth and postpartum.',
    url: 'https://earlydayswithchelsea.com/',
    siteName: 'Early Days with Chelsea',
    images: [
      {
        url: 'https://earlydayswithchelsea.com/images/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Early Days with Chelsea',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Early Days with Chelsea',
    description: 'Compassionate doula support for birth and postpartum.',
    images: ['https://earlydayswithchelsea.com/images/preview.jpg'],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
