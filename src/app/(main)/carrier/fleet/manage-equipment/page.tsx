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
    number: "435-ARX",
    time: "9:00 AM",
    broker: "John Ruth",
    measurement: "50m x 105m",
    trailer: "Super-B",
    status: "On Delivery",
    weight: "20000kg",
  },
  {
    id: "549494XXXX",
    number: "435-ARX",
    time: "9:00 AM",
    broker: "John Ruth",
    measurement: "50m x 105m",
    trailer: "Super-B",
    status: "On Delivery",
    weight: "20000kg",
  },
  {
    id: "549494XXXX",
    number: "435-ARX",
    time: "9:00 AM",
    broker: "John Ruth",
    measurement: "50m x 105m",
    trailer: "Super-B",
    status: "On Delivery",
    weight: "20000kg",
  },
  {
    id: "549494XXXX",
    number: "435-ARX",
    time: "9:00 AM",
    broker: "John Ruth",
    measurement: "50m x 105m",
    trailer: "Super-B",
    status: "On Delivery",
    weight: "20000kg",
  },
  {
    id: "549494XXXX",
    number: "435-ARX",
    time: "9:00 AM",
    broker: "John Ruth",
    measurement: "50m x 105m",
    trailer: "Super-B",
    status: "On Delivery",
    weight: "20000kg",
  },
  {
    id: "549494XXXX",
    number: "435-ARX",
    time: "9:00 AM",
    broker: "John Ruth",
    measurement: "50m x 105m",
    trailer: "Super-B",
    status: "On Delivery",
    weight: "20000kg",
  },
  {
    id: "549494XXXX",
    number: "435-ARX",
    time: "9:00 AM",
    broker: "John Ruth",
    measurement: "50m x 105m",
    trailer: "Super-B",
    status: "On Delivery",
    weight: "20000kg",
  },
  {
    id: "549494XXXX",
    number: "435-ARX",
    time: "9:00 AM",
    broker: "John Ruth",
    measurement: "50m x 105m",
    trailer: "Super-B",
    status: "On Delivery",
    weight: "20000kg",
  },
  {
    id: "549494XXXX",
    number: "435-ARX",
    time: "9:00 AM",
    broker: "John Ruth",
    measurement: "50m x 105m",
    trailer: "Super-B",
    status: "On Delivery",
    weight: "20000kg",
  },
  // Add more entries as needed...
];



const page = () => {
  return (
    <div className="flex flex-col space-y-6 p-6">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="bg-loadLightBlue dark:bg-loadGray text-white border-none focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="Type of Trailer" />
              </SelectTrigger>
              <SelectContent className="bg-loadLightBlue dark:bg-loadGray text-white">
                <SelectItem value="super-b">Super-B</SelectItem>
                <SelectItem value="step-deck">Step Deck</SelectItem>
                <SelectItem value="reefer">Reefer</SelectItem>
                <SelectItem value="flatbed">Flatbed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="bg-loadBlue text-white px-6">Submit</Button>
        </div>
      </div>
      <div className=" text-white p-4 rounded-md">
        {/* Header */}
        <div className="grid grid-cols-7 gap-4 text-sm font-semibold text-white/80 border-b border-white/10 pb-2 mb-2">
          <div>Trailer ID</div>
          <div>Trailer Number</div>
          <div>Driver Assigned</div>
          <div>Measurement</div>
          <div>Trailer</div>
          <div>Status</div>
          <div className="">Weight</div>
        </div>

        {/* Rows */}
        {mockData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-7 gap-4 items-center py-2 border border-white my-2 p-2 hover:bg-white/5 rounded-md"
          >
            <div className="font-semibold">{item.id}</div>

            <div className="text-sm text-gray-300">{item.number}</div>

            <div className="text-sm">{item.broker}</div>
            <div className="text-sm">{item.measurement}</div>
            <div className="text-sm">{item.trailer}</div>

            <div className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full bg-green-500`}
              />
              <span>{item.status}</span>
            </div>

            <div className="flex  items-center gap-2  font-medium">
              {item.weight}{" "}
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
