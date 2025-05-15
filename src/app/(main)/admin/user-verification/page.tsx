import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

type User = {
  id: string;
  name: string;
  processDate: string;
  email: string;
  status: "Pending" | "Urgent";
};

const page = () => {
  const users: User[] = [
    {
      id: "1",
      name: "John R.",
      processDate: "Mar 20, 2025",
      email: "johnruth2@gmail.com",
      status: "Pending",
    },
    {
      id: "2",
      name: "Emma S.",
      processDate: "Feb 20, 2025",
      email: "emmasmi@gmail.com",
      status: "Pending",
    },
    {
      id: "3",
      name: "Shawn N.",
      processDate: "Jan 20, 2025",
      email: "shaddy02@gmail.com",
      status: "Pending",
    },
    {
      id: "4",
      name: "Emily S.",
      processDate: "Jan 18, 2025",
      email: "Emilyarts@gmail.com",
      status: "Pending",
    },
    {
      id: "5",
      name: "John K.",
      processDate: "Jan 10, 2025",
      email: "johnKid2@gmail.com",
      status: "Pending",
    },
    {
      id: "6",
      name: "Mona L.",
      processDate: "Dec 10, 2024",
      email: "Mona2109@gmail.com",
      status: "Pending",
    },
    {
      id: "7",
      name: "Mike J.",
      processDate: "Dec 09, 2024",
      email: "Mikey04@gmail.com",
      status: "Pending",
    },
    {
      id: "8",
      name: "John Ruth",
      processDate: "Nov 20, 2024",
      email: "johnruth2@gmail.com",
      status: "Pending",
    },
    {
      id: "9",
      name: "Carl B.",
      processDate: "Sep 21, 2024",
      email: "Carlburg07@gmail.com",
      status: "Pending",
    },
    {
      id: "10",
      name: "Bob M.",
      processDate: "Sep 20, 2024",
      email: "BobMarley1@gmail.com",
      status: "Pending",
    },
  ];
  return (
    <div className="flex flex-col space-y-12 p-6">
      <div className="rounded-lg bg-loadGray px-20 py-4 flex items-center justify-between">
        <div className="flex gap-2">
          <h2 className="text-2xl">Filter By:</h2>
          <Select defaultValue="pending">
            <SelectTrigger className="w-fit rounded-full border border-yellow-400 text-yellow-500 px-4 py-1.5 text-sm font-medium hover:bg-yellow-200 focus:ring-yellow-400 focus:ring-offset-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <h2 className="text-xl font-bold">
            Pending: <span className="text-yellow-500">15</span>
          </h2>
          <h2 className="text-xl font-bold">
            Urgent: <span className="text-red-700">05</span>
          </h2>
        </div>
      </div>
      <div className="rounded-lg p-4 bg-loadGray">
        <h2 className="text-xl font-bold my-4">User Details</h2>
        <div className="flex space-x-4">
          <div className="w-[65%]">
            <div className="grid grid-cols-4 gap-4 text-sm my-2 px-4">
              <div>User Name</div>
              <div>Process Date</div>
              <div>Email</div>
              <div>Status</div>
            </div>

            <div className="space-y-2">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="grid grid-cols-4 gap-4 items-center border border-white rounded-lg p-4  transition-colors"
                >
                  <div className=" flex items-center gap-2">
                    <span className="text-white">{user.name}</span>
                  </div>
                  <div className=" ">{user.processDate}</div>
                  <div className=" ">{user.email}</div>
                  <div className="">
                    <div className="flex items-center gap-2">
                      <span className="">{user.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[35%] flex flex-col space-y-4 border-1 border-white rounded-lg p-4 mt-8">
            <h2 className="text-xl">User Details</h2>
            <p className="text-[#DFDFDF]">
              Please enter your bank account details with which you are going to
              make payment for investment.
            </p>
            <div className="grid gap-4">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-white my-2">
                  Name
                </Label>
                <Input id="name" value="John R." readOnly />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-white my-2">
                  Email
                </Label>
                <Input id="email" value="johnruth2@gmail.com" readOnly />
              </div>

              {/* Company */}
              <div>
                <Label htmlFor="company" className="text-white my-2">
                  Company
                </Label>
                <Input id="company" value="NIQ Brokers" readOnly />
              </div>

              {/* User Profile */}
              <div>
                <Label htmlFor="profile" className="text-white my-2">
                  User Profile
                </Label>
                <Input id="profile" value="Broker" readOnly />
              </div>

              {/* Address */}
              <div>
                <Label htmlFor="address" className="text-white my-2">
                  Address
                </Label>
                <Input id="address" value="East York" readOnly />
              </div>

              {/* Document Proof */}
              <div className="mt-2">
                <Label className="text-white">
                  Proof of Documents and Pictures
                </Label>
                <div className="flex items-center justify-between mt-2 rounded-md bg-zinc-800 p-3 text-white">
                  <span>Flatbed #273YTK38</span>
                  <Button
                    variant="secondary"
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <Paperclip className="mr-2 h-4 w-4" />
                    Doc. Proof
                  </Button>
                </div>
                <p className="mt-1 text-sm text-blue-400 cursor-pointer hover:underline">
                  +5 more
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 justify-between mt-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white w-full mr-2">
                  Accept
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white w-full ml-2">
                  Reject
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
