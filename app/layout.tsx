import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { cn } from "@/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";


export const metadata: Metadata = {
  title: "Peter - EVI",
  description: "A friendly neighbourhood companion named Peter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}
    >
      <html lang="en">
        <body
          className={cn(
            GeistSans.variable,
            GeistMono.variable,
            "flex flex-col min-h-screen"
          )}
        >
            <Nav />
            {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
