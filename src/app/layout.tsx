import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import Inter font only
import "./globals.css";

// Define Inter font with all available font weights (100-900)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // All weights
});

export const metadata: Metadata = {
  title: "News App",
  description: "News app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
