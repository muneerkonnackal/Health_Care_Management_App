import type { Metadata } from "next";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
  title: "CareHands",
  description: "A healthcare management system",
  icons: {
    icon: "/assets/icons/logo-icon.svg",
  },
};

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontSans.variable}> {/* Make sure the font class is applied here */}
      <body className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased", // This is where your base styling goes
        )}>
         <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
