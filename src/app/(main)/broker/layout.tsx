"use client";

import {
  Bell,
  File,
  LayoutDashboard,
  LogOut,
  PackageOpen,
  Search,
  Truck,
  User,
  Sun,
  Moon,
  BookCheck,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/broker/dashboard" },
    { label: "Truck Discovery", icon: PackageOpen, href: "/broker/truck-discovery" },
    {
      label: "Load Management",
      icon: Truck,
      href: "/broker/load",
      children: [
        { label: "Load History", href: "/broker/load/load-history" },
        { label: "Manage Loads", href: "/broker/load/manage-loads" },
      ],
    },
    {
      label: "Doc. Management",
      icon: File,
      href: "/broker/documents",
      children: [
        {
          label: "Manage BOL",
          href: "/broker/documents/manage-bol",
        },
        { label: "Manage Invoices", href: "/broker/documents/manage-invoice" },
        { label: "Contract management", href: "/broker/documents/contract-management" },
        { label: "Review POD", href: "/broker/documents/review-pod" },
      ],
    },
  ];

  const currentPage =
    menuItems.find((item) => pathname.startsWith(item.href))?.label ||
    "Dashboard";

  return (
    <div className="min-h-screen flex transition-all duration-300">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-[18%]" : "w-[5%]"
        } bg-loadLightBlue dark:bg-loadGray flex flex-col justify-between transition-all duration-300`}
      >
        <div>
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2 m-6">
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="rounded-md"
            />
          </Link>
          <div className="flex flex-col gap-6 text-xl border-b-3 pb-4">
            {/* Notification Icon */}
            <div className="relative mx-6 mt-4">
              <div className="bg-loadLightBlue dark:bg-loadGray rounded-full flex gap-2">
                <Bell size={25} />
                {isSidebarOpen && <Link href="">Notifications</Link>}
              </div>
              {/* Notification dot */}
              <span className="absolute top-0 left-5 w-2 h-2 bg-loadOrange rounded-full" />
            </div>

            {/* User Icon */}
            <div className="bg-loadLightBlue dark:bg-loadGray rounded-full mx-6 flex gap-2">
              <User size={25} />
              {isSidebarOpen && <Link href="">My Profile</Link>}
            </div>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full mx-6 flex items-center gap-2 cursor-pointer"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="text-yellow-400" />
                  {isSidebarOpen && <span>Light</span>}
                </>
              ) : (
                <>
                  <Moon className="text-black" />
                  {isSidebarOpen && <span>Dark</span>}
                </>
              )}
            </button>
          </div>

          {/* Menu */}
          <nav className="flex flex-col gap-6 text-xl mx-6 my-4">
            {menuItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              const Icon = item.icon;

              return (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 transition ${
                      isActive
                        ? "dark:text-white font-semibold"
                        : "text-gray-400 dark:hover:text-white"
                    }`}
                  >
                    <Icon
                      className={`${isSidebarOpen ? "w-5 h-5" : "w-6 h-6"} ${
                        isActive ? "dark:text-white" : "text-gray-400"
                      }`}
                    />
                    {isSidebarOpen && item.label}
                  </Link>

                  {/* Render Submenu if present and sidebar is open */}
                  {isSidebarOpen && item.children && (
                    <div className="ml-8 mt-2 flex flex-col gap-4 text-lg text-gray-500">
                      {item.children.map((subItem) => {
                        const isSubActive = pathname === subItem.href;
                        return (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`flex items-center gap-3 transition ${
                              isSubActive
                                ? "dark:text-white font-semibold"
                                : "text-gray-400 dark:hover:text-white"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Promo Image */}
        {/* {isSidebarOpen && (
          <Image
            src="/sideBarImg.png"
            alt="Sidebar Promo"
            width={200}
            height={80}
            className="m-6"
          />
        )} */}

        {/* Logout */}
        <div className="border-t-2 border-loadOrange p-2 flex cursor-pointer items-center">
          <div className="text-loadOrange border-r-2 border-loadOrange pr-2">
            <LogOut />
          </div>
          {isSidebarOpen && <div className="p-2 text-gray-400">Logout</div>}
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`${
          isSidebarOpen ? "w-[82%]" : "w-[95%]"
        } dark:bg-loadDarkGray dark:text-white transition-all duration-300`}
      >
        {/* Navbar */}
        <div className="flex justify-between p-6 items-center">
          <div className="flex items-center gap-4">
            {/* Toggle Sidebar Button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-loadOrange text-xl focus:outline-none cursor-pointer"
            >
              {isSidebarOpen ? "❮" : "❯"}
            </button>
            {/* Page Title */}
            <h1 className="text-3xl font-bold">{currentPage}</h1>
          </div>

          {/* Right Navbar */}
          <div className="flex items-center gap-4"></div>
        </div>

        {/* Page Content */}
        {children}
      </div>
    </div>
  );
}
