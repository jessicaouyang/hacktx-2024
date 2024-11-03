import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
} from "@clerk/nextjs";

const font = FontSans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uncle (AI)roh",
  description: "Have you ever found yourself in crisis while leading the fire nation at war? You might consider chatting with your dear Uncle (AI)roh. Sit down for a moment and have a cup of tea!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(font.className)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
