import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClientLayoutWrapper } from "./clientLayoutWrapper";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "emBella App",
  description: "Generate email by image",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientLayoutWrapper className={poppins.variable}>
        {children}
      </ClientLayoutWrapper>
    </html>
  );
}
