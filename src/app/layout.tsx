import type { Metadata } from "next";
import { Philosopher, Source_Sans_3 } from "next/font/google";
import "./../assets/styles/globals.css";

const philosopher = Philosopher({
  variable: "--font-philosopher",
  weight: ["400", "700"],
});

const source_Sans_3 = Source_Sans_3({
  variable: "--font-source-sans",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Yoga Studio",
  description: "Yoga Studio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${philosopher.variable} ${source_Sans_3.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
