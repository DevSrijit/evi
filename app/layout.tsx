import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { cn } from "@/utils";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
const inter = Inter({ subsets: ["latin"] });
import SignInPage from "./(auth)/sign-in/[[...sign-in]]/page";

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
            inter.className,
            inter.className,
            "flex flex-col min-h-screen",
            "bg-black"
          )}
        >
          <SignedOut>
            <SignInPage/>
          </SignedOut>
          <SignedIn>
            <Nav />
            {children}
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
