import type { Metadata } from "next";
import "./globals.css";
import ReduxRegistry from "@/components/Redux/ReduxRegistry";
import { ClerkProvider } from "@clerk/nextjs";
import ThemeRegistry from "./ThemeRegistry";


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxRegistry>
      <ClerkProvider>
        <ThemeRegistry>
          <html lang="en">
            <body>
              {children}
            </body>
          </html>
        </ThemeRegistry>
      </ClerkProvider>
    </ReduxRegistry>
  );
}
