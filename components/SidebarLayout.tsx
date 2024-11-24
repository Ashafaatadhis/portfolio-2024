"use client";

import useSidebar from "@/hooks/useSidebar";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { active } = useSidebar();
  return (
    <main className="p-6">
      <Navbar />

      <Sidebar />
      <div
        className={`${
          active ? "xl:ml-[304px]" : "xl:ml-[100px]"
        } transition-all min-h-full`}
      >
        {children}
      </div>
    </main>
  );
}
