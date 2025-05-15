import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";

const mockData = [
  {
    id: "549494XXXX",
    date: "Mar 20, 2025",
    time: "9:00 AM",
    broker: "John Ruth",
    route: "Toronto - Chicago",
    trailer: "Super-B",
    status: "Completed",
    payment: "$2400",
  },
  {
    id: "549494XXXX",
    date: "Mar 20, 2025",
    time: "9:00 AM",
    broker: "John Ruth",
    route: "Toronto - Chicago",
    trailer: "Super-B",
    status: "Canceled",
    payment: "$2400",
  },
  {
    id: "549494XXXX",
    date: "Mar 20, 2025",
    time: "9:00 AM",
    broker: "John Ruth",
    route: "Toronto - Chicago",
    trailer: "Super-B",
    status: "Pending",
    payment: "$2400",
  },
  {
    id: "549494XXXX",
    date: "Mar 20, 2025",
    time: "9:00 AM",
    broker: "John Ruth",
    route: "Toronto - Chicago",
    trailer: "Super-B",
    status: "Completed",
    payment: "$2400",
  },
  {
    id: "549494XXXX",
    date: "Mar 20, 2025",
    time: "9:00 AM",
    broker: "John Ruth",
    route: "Toronto - Chicago",
    trailer: "Super-B",
    status: "Canceled",
    payment: "$2400",
  },
  {
    id: "549494XXXX",
    date: "Mar 20, 2025",
    time: "9:00 AM",
    broker: "John Ruth",
    route: "Toronto - Chicago",
    trailer: "Super-B",
    status: "Pending",
    payment: "$2400",
  },
  {
    id: "549494XXXX",
    date: "Mar 20, 2025",
    time: "9:00 AM",
    broker: "John Ruth",
    route: "Toronto - Chicago",
    trailer: "Super-B",
    status: "Completed",
    payment: "$2400",
  },
  {
    id: "549494XXXX",
    date: "Mar 20, 2025",
    time: "9:00 AM",
    broker: "John Ruth",
    route: "Toronto - Chicago",
    trailer: "Super-B",
    status: "Canceled",
    payment: "$2400",
  },
  {
    id: "549494XXXX",
    date: "Mar 20, 2025",
    time: "9:00 AM",
    broker: "John Ruth",
    route: "Toronto - Chicago",
    trailer: "Super-B",
    status: "Pending",
    payment: "$2400",
  },
  // Add more entries as needed...
];

const statusColor = {
  Completed: "bg-green-600",
  Pending: "bg-yellow-500",
  Canceled: "bg-red-600",
};

const page = () => {
  return (
    <div className="flex flex-col space-y-6 p-6">
      <div>
        <h2 className="text-2xl">Filter</h2>
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <Input
              placeholder="origin"
              className="bg-loadLightBlue dark:bg-loadGray text-white border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Select>
              <SelectTrigger className="bg-loadLightBlue dark:bg-loadGray text-white border-none focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="Type of Trailer Required (Super-B)" />
              </SelectTrigger>
              <SelectContent className="bg-loadLightBlue dark:bg-loadGray text-white">
                <SelectItem value="super-b">Super-B</SelectItem>
                <SelectItem value="step-deck">Step Deck</SelectItem>
                <SelectItem value="reefer">Reefer</SelectItem>
                <SelectItem value="flatbed">Flatbed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="bg-loadPurple text-white px-6">Submit</Button>
        </div>
      </div>
      <div className=" text-white p-4 rounded-md">
        {/* Header */}
        <div className="grid grid-cols-7 gap-4 text-sm font-semibold text-white/80 border-b border-white/10 pb-2 mb-2">
          <div>Load ID</div>
          <div>Date & Time (Pickup)</div>
          <div>Broker</div>
          <div>Origin & Destination</div>
          <div>Trailer Req.</div>
          <div>Status</div>
          <div className="">Payment</div>
        </div>

        {/* Rows */}
        {mockData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-7 gap-4 items-center py-2 border border-white my-2 p-2 hover:bg-white/5 rounded-md"
          >
            <div className="font-semibold">{item.id}</div>

            <div className="text-sm text-gray-300">
              {item.date} <span className="text-gray-500">{item.time}</span>
            </div>

            <div className="text-sm">{item.broker}</div>
            <div className="text-sm">{item.route}</div>
            <div className="text-sm">{item.trailer}</div>

            <div className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${
                  statusColor[item.status as keyof typeof statusColor]
                }`}
              />
              <span>{item.status}</span>
            </div>

            <div className="flex  items-center gap-2 text-purple-400 font-medium">
              {item.payment}
              <Button variant="ghost" size="icon">
                <ArrowRight className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
