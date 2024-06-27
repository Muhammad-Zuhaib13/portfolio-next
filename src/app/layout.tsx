import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@fontsource/urbanist';
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Protfolio Next App",
  description: "It is a nextjs portfolio",
};
const LufgaLight = localFont({
  src: [
    {
      path: "../../public/fonts/LufgaLight.ttf",
      weight: "400",
    },
  ],
  variable: "--font-lufga-light",
});
const LufgaMedium = localFont({
  src: [
    {
      path: "../../public/fonts/LufgaMedium.ttf",
      weight: "500",
    },
  ],
  variable: "--font-lufga-medium",
});
const LufgaLighLufgaSemiBold = localFont({
  src: [
    {
      path: "../../public/fonts/LufgaSemiBold.ttf",
      weight: "600",
    },
  ],
  variable: "--font-lufga-semi-bold",
});
const LufgaBold = localFont({
  src: [
    {
      path: "../../public/fonts/LufgaBold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-lufga-bold",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${LufgaLight.variable} ${LufgaMedium.variable} ${LufgaLighLufgaSemiBold.variable} ${LufgaBold.variable} `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
