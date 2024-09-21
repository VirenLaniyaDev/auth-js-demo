import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/components/navbar";
import { SessionProvider } from "next-auth/react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auth JS Demo",
  description:
    "Authentication & Authorization using Auth.js library in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={`${poppins.className} antialiased`}>
          <NavbarComponent />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
