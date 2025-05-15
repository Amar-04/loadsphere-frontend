"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const page = () => {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const [invoices] = useState([
    {
      id: "5494941XXX",
      date: "Mar 20, 2025",
      time: "9:00 AM",
      carrier: "Flykit Carrier",
      route: "Toronto - Chicago",
      cabinClass: "Super-B",
      status: "Confirmed",
      price: 2400,
    },
    {
      id: "5494942XXX",
      date: "Mar 20, 2025",
      time: "9:00 AM",
      carrier: "Flykit Carrier",
      route: "Toronto - Chicago",
      cabinClass: "Super-B",
      status: "Confirmed",
      price: 2400,
    },
    {
      id: "5494943XXX",
      date: "Mar 20, 2025",
      time: "9:00 AM",
      carrier: "Flykit Carrier",
      route: "Toronto - Chicago",
      cabinClass: "Super-B",
      status: "Confirmed",
      price: 2400,
    },
    {
      id: "5494944XXX",
      date: "Mar 20, 2025",
      time: "9:00 AM",
      carrier: "Flykit Carrier",
      route: "Toronto - Chicago",
      cabinClass: "Super-B",
      status: "Confirmed",
      price: 2400,
    },
    {
      id: "5494945XXX",
      date: "Mar 20, 2025",
      time: "9:00 AM",
      carrier: "Flykit Carrier",
      route: "Toronto - Chicago",
      cabinClass: "Super-B",
      status: "Confirmed",
      price: 2400,
    },
    {
      id: "5494946XXX",
      date: "Mar 20, 2025",
      time: "9:00 AM",
      carrier: "Flykit Carrier",
      route: "Toronto - Chicago",
      cabinClass: "Super-B",
      status: "Confirmed",
      price: 2400,
    },
  ]);
  return (
    <div className="container p-6">
      <div className="flex gap-4">
        <Button className="bg-loadOrange text-white font-bold hover:bg-transparent hover:border hover:border-loadOrange">
          Import +
        </Button>
        <Button className="bg-transparent text-white border border-loadOrange px-6 hover:bg-loadOrange">
          Filter
        </Button>
      </div>
      <div className="mt-4">
        {invoices.map((invoice, index) => (
          <div
            key={index}
            className="flex items-center justify-between  border border-white px-4 py-3 rounded-md my-2"
          >
            
            <div className="text-gray-300 w-28 truncate">{invoice.id}</div>
            <div className="text-gray-300 w-40 truncate">{`${invoice.date}| ${invoice.time}`}</div>
            <div className="text-gray-300 w-28 truncate">{invoice.carrier}</div>
            <div className="text-gray-300 w-32 truncate">{invoice.route}</div>
            <div className="text-gray-300 w-20 truncate">
              {invoice.cabinClass}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-gray-300">{invoice.status}</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-orange-400 font-medium">${invoice.price}</div>
              <DropdownMenu
                open={activeMenuId === invoice.id}
                onOpenChange={(open) =>
                  setActiveMenuId(open ? invoice.id : null)
                }
              >
                <DropdownMenuTrigger asChild>
                  <button className="p-1 rounded-full hover:bg-gray-700 focus:outline-none">
                    <MoreVertical className="h-5 w-5 text-gray-400" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-32 bg-loadGray  rounded-2xl"
                >
                  <DropdownMenuItem className="text-gray-300 border-b focus:bg-gray-700 focus:text-gray-100">
                    View
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300 border-b focus:bg-gray-700 focus:text-gray-100">
                    Share
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300 border-b focus:bg-gray-700 focus:text-gray-100">
                    Download
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
