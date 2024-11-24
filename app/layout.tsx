import { Onest } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

import SidebarLayout from "@/components/SidebarLayout";

const onest = Onest({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${onest.className}  bg-[#EAECF8] dark:bg-[#171725] antialiased`}
      >
        <ThemeProvider attribute="class">
          <SidebarLayout>{children}</SidebarLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
