"use client";

import * as React from "react";
import {
  LayoutDashboard,
  PackageOpen,
  Truck,
  File,
  LogOut,
} from "lucide-react";

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const user = {
  name: "FleetOps",
  email: "admin@fleetops.com",
  avatar: "/logo.png",
};

const navItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "/dashboard",
  },
  {
    title: "Load Discovery",
    icon: PackageOpen,
    url: "/load-discovery",
  },
  {
    title: "Fleet Management",
    icon: Truck,
    url: "/fleet",
  },
  {
    title: "Doc. Management",
    icon: File,
    url: "/documents",
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="offcanvas" className="bg-loadGray text-white" {...props}>
      {/* Logo Section */}
      <SidebarHeader className="p-6">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard" className="flex items-center gap-3">
                <Image src={user.avatar} alt="Logo" width={40} height={40} className="rounded-md" />
                <span className="text-lg font-semibold">FleetOps</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent className="flex flex-col justify-between h-full">
        <nav className="flex flex-col gap-4 text-lg px-6 pt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.url;
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.url}
                className={`flex items-center gap-3 transition ${
                  isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-400"}`} />
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Promo Image + Logout */}
        <div className="mt-auto">
          <Image
            src="/sideBarImg.png"
            alt="Promo"
            width={200}
            height={80}
            className="m-6"
          />

          <div className="border-t-2 border-loadBlue p-2 flex items-center cursor-pointer">
            <div className="text-loadBlue border-r-2 border-loadBlue pr-2">
              <LogOut />
            </div>
            <div className="p-2 text-gray-400">Logout</div>
          </div>
        </div>
      </SidebarContent>

      {/* Optional Footer (could add user info here if needed) */}
      <SidebarFooter className="hidden" />
    </Sidebar>
  );
}
