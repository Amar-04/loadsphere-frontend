import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from "lucide-react";

const page = () => {
  const loads = [1, 2, 3, 4];
  return (
    <div className="min-h-screen container">
      {/* form  */}
      <div className="px-6 py-1 rounded-md dark:text-white space-y-4">
        <h2 className="text-2xl font-bold">Filter</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Input
            placeholder="origin"
            className="bg-loadLightBlue dark:bg-loadGray text-white border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Input
            placeholder="Destination"
            className="bg-loadLightBlue dark:bg-loadGray text-white border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />

          <div className="flex items-center space-x-4">
            <span className="text-loadOrange font-medium text-xl">
              Type of Load :
            </span>
            <Button className="bg-loadLightBlue dark:bg-loadGray dark:text-white hover:bg-loadOrange px-4 py-1 h-auto rounded-md text-sm cursor-pointer">
              FTL
            </Button>
            <Button className="bg-loadLightBlue dark:bg-loadGray hover:bg-loadOrange dark:text-white px-4 py-1 h-auto rounded-md text-sm cursor-pointer">
              LTL
            </Button>
          </div>

          <Select>
            <SelectTrigger className="bg-loadLightBlue dark:bg-loadGray text-white border-none focus:ring-0 focus:ring-offset-0 -ml-4">
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
      </div>

      {/* Load Listing  */}

      <div className="flex flex-col px-6 py-2 mt-2">
        <h1 className="dark:text-white text-3xl font-bold">Carrier Listing:</h1>
        <div className="grid grid-cols-3 gap-1">
          {/* left  */}
          <div className="flex flex-col col-span-2">
            <Card className="relative bg-[#C54B00] border-none rounded-xs mt-2 px-4 py-1">
              {/* Status indicator */}
              <div className="absolute left-0 top-0 h-full w-1 bg-green-500" />
              <Badge className="absolute top-2 right-2 rounded-full bg-green-500">
                Active
              </Badge>
              <div className="flex flex-col">
                <div className="w-[92%] bg-loadGray border flex items-center justify-between rounded-sm">
                  <div className="flex flex-col p-2">
                    <h3 className="font-semibold text-white">
                      North Canton, OH, US
                    </h3>
                    <p className="text-gray-400 text-sm">
                      04/02/2025 08:00 AM - 02:00 PM
                    </p>
                  </div>
                  <ArrowRight className="text-white w-12 h-6" />
                  <div className="flex flex-col p-2">
                    <h3 className="font-semibold text-white">
                      McKinney, TX, US
                    </h3>
                    <p className="text-gray-400 text-sm">
                      04/04/2025 08:00 AM - 09:00 AM
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">1800 km</h3>
                    
                  </div>
                  <h3 className="text-white font-semibold">9800 kg</h3>
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">Van</h3>
                    <p className="text-sm text-gray-200">48x102</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">1550.00 USD</h3>
                    
                  </div>
                </div>
              </div>
            </Card>

            <Card className="relative bg-[#AA6134] border-none rounded-xs mt-3  px-4 py-1">
              <div className="flex flex-col">
                <div className="w-[92%] bg-loadGray border flex items-center justify-between rounded-sm">
                  <div className="flex flex-col p-2">
                    <h3 className="font-semibold text-white">
                      North Canton, OH, US
                    </h3>
                    <p className="text-gray-400 text-sm">
                      04/02/2025 08:00 AM - 02:00 PM
                    </p>
                  </div>
                  <ArrowRight className="text-white w-12 h-6" />
                  <div className="flex flex-col p-2">
                    <h3 className="font-semibold text-white">
                      McKinney, TX, US
                    </h3>
                    <p className="text-gray-400 text-sm">
                      04/04/2025 08:00 AM - 09:00 AM
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">1800 km</h3>
                    
                  </div>
                  <h3 className="text-white font-semibold">9800 kg</h3>
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">Van</h3>
                    <p className="text-sm text-gray-200">48x102</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">1550.00 USD</h3>
                    
                  </div>
                </div>
              </div>
            </Card>
            <Card className="relative bg-[#AA6134] border-none rounded-xs mt-3 px-4 py-1">
              <div className="flex flex-col">
                <div className="w-[92%] bg-loadGray border flex items-center justify-between rounded-sm">
                  <div className="flex flex-col p-2">
                    <h3 className="font-semibold text-white">
                      North Canton, OH, US
                    </h3>
                    <p className="text-gray-400 text-sm">
                      04/02/2025 08:00 AM - 02:00 PM
                    </p>
                  </div>
                  <ArrowRight className="text-white w-12 h-6" />
                  <div className="flex flex-col p-2">
                    <h3 className="font-semibold text-white">
                      McKinney, TX, US
                    </h3>
                    <p className="text-gray-400 text-sm">
                      04/04/2025 08:00 AM - 09:00 AM
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">1800 km</h3>
                    
                  </div>
                  <h3 className="text-white font-semibold">9800 kg</h3>
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">Van</h3>
                    <p className="text-sm text-gray-200">48x102</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">1550.00 USD</h3>
                    
                  </div>
                </div>
              </div>
            </Card>
            <Card className="relative bg-[#AA6134] border-none rounded-xs mt-3 px-4 py-1">
              <div className="flex flex-col">
                <div className="w-[92%] bg-loadGray border flex items-center justify-between rounded-sm">
                  <div className="flex flex-col p-2">
                    <h3 className="font-semibold text-white">
                      North Canton, OH, US
                    </h3>
                    <p className="text-gray-400 text-sm">
                      04/02/2025 08:00 AM - 02:00 PM
                    </p>
                  </div>
                  <ArrowRight className="text-white w-12 h-6" />
                  <div className="flex flex-col p-2">
                    <h3 className="font-semibold text-white">
                      McKinney, TX, US
                    </h3>
                    <p className="text-gray-400 text-sm">
                      04/04/2025 08:00 AM - 09:00 AM
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">1800 km</h3>
                    
                  </div>
                  <h3 className="text-white font-semibold">9800 kg</h3>
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">Van</h3>
                    <p className="text-sm text-gray-200">48x102</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">1550.00 USD</h3>
                    
                  </div>
                </div>
              </div>
            </Card>
            <Card className="relative bg-[#2B2B2B] border-none rounded-xs mt-3 px-4 py-1">
              <div className="flex flex-col">
                <div className="w-[92%] bg-loadGray border flex items-center justify-between rounded-sm">
                  <div className="flex flex-col p-2">
                    <h3 className="font-semibold text-white">
                      North Canton, OH, US
                    </h3>
                    <p className="text-gray-400 text-sm">
                      04/02/2025 08:00 AM - 02:00 PM
                    </p>
                  </div>
                  <ArrowRight className="text-white w-12 h-6" />
                  <div className="flex flex-col p-2">
                    <h3 className="font-semibold text-white">
                      McKinney, TX, US
                    </h3>
                    <p className="text-gray-400 text-sm">
                      04/04/2025 08:00 AM - 09:00 AM
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">1800 km</h3>
                    
                  </div>
                  <h3 className="text-white font-semibold">9800 kg</h3>
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">Van</h3>
                    <p className="text-sm text-gray-200">48x102</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">1550.00 USD</h3>
                    
                  </div>
                </div>
              </div>
            </Card>
            <Card className="relative bg-[#2B2B2B] border-none rounded-xs mt-3 px-4 py-1">
              <div className="flex flex-col">
                <div className="w-[92%] bg-loadGray border flex items-center justify-between rounded-sm">
                  <div className="flex flex-col p-2">
                    <h3 className="font-semibold text-white">
                      North Canton, OH, US
                    </h3>
                    <p className="text-gray-400 text-sm">
                      04/02/2025 08:00 AM - 02:00 PM
                    </p>
                  </div>
                  <ArrowRight className="text-white w-12 h-6" />
                  <div className="flex flex-col p-2">
                    <h3 className="font-semibold text-white">
                      McKinney, TX, US
                    </h3>
                    <p className="text-gray-400 text-sm">
                      04/04/2025 08:00 AM - 09:00 AM
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">1800 km</h3>
                    
                  </div>
                  <h3 className="text-white font-semibold">9800 kg</h3>
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">Van</h3>
                    <p className="text-sm text-gray-200">48x102</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">1550.00 USD</h3>
                    
                  </div>
                </div>
              </div>
            </Card>
            <Card className="relative bg-[#2B2B2B] border-none rounded-xs mt-3 px-4 py-1">
              <div className="flex flex-col">
                <div className="w-[92%] bg-loadGray border flex items-center justify-between rounded-sm">
                  <div className="flex flex-col p-2">
                    <h3 className="font-semibold text-white">
                      North Canton, OH, US
                    </h3>
                    <p className="text-gray-400 text-sm">
                      04/02/2025 08:00 AM - 02:00 PM
                    </p>
                  </div>
                  <ArrowRight className="text-white w-12 h-6" />
                  <div className="flex flex-col p-2">
                    <h3 className="font-semibold text-white">
                      McKinney, TX, US
                    </h3>
                    <p className="text-gray-400 text-sm">
                      04/04/2025 08:00 AM - 09:00 AM
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">1800 km</h3>
                    
                  </div>
                  <h3 className="text-white font-semibold">9800 kg</h3>
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">Van</h3>
                    <p className="text-sm text-gray-200">48x102</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <h3 className="text-white font-semibold">1550.00 USD</h3>
                    
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* right  */}
          <div className="flex flex-col max-h-[90%] bg-loadLightBlue dark:bg-loadGray m-4 border rounded-md">
            <h2 className="text-lg font-semibold border-b px-4 py-1">
              #753805368
            </h2>
            <div className="m-2 bg-white dark:bg-[#2B2B2B]">
              {/* Pickup location */}
              <div className="flex p-4 relative">
                <div className="mr-4 relative z-10">
                  <div className="w-3 h-3 bg-loadOrange rounded-full mt-1"></div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-loadOrange font-medium">PICKUP</p>
                      <p className="font-semibold">KONG North Canton</p>
                      <p>North Canton, OH</p>
                      <p className="text-gray-400 text-sm">
                        04/02/2025 • 08:00 AM - 02:00 PM
                      </p>
                      <p className="text-gray-400 text-sm flex items-center mt-1">
                        <Check className="w-4 h-4 mr-1" /> Appointment Set
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-300">9800 kg</p>
                      <p className="text-gray-400 text-sm">No Touch</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dropoff location */}
              <div className="flex p-4 relative">
                <div className="mr-4 relative z-10">
                  <div className="w-3 h-3 bg-loadOrange rounded-full mt-1"></div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-loadOrange font-medium">
                        DROPOFF (1800 kg)
                      </p>
                      <p className="font-semibold">KVP</p>
                      <p>McKinney, TX</p>
                      <p className="text-gray-400 text-sm">
                        04/04/2025 • 09:00 AM
                      </p>
                      <p className="text-gray-400 text-sm flex items-center mt-1">
                        <Check className="w-4 h-4 mr-1" /> Appointment Set
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-300">9800 kg</p>
                      <p className="text-gray-400 text-sm">No Touch</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 px-4">
              <div className="p-3">
                <p className="text-gray-400">Equipment</p>
                <p className="font-medium">Van</p>
              </div>
              <div className="p-3">
                <p className="text-gray-400">Measurements</p>
                <p className="font-medium">48x102</p>
              </div>
              <div className="p-3">
                <p className="text-gray-400">Total Weight</p>
                <p className="font-medium">9800 kg</p>
              </div>
            </div>

            {/* Additional details grid */}
            <div className="grid grid-cols-3 px-4">
              <div className="p-3">
                <p className="text-gray-400">Distance</p>
                <p className="font-medium">1800 km</p>
              </div>
              <div className="p-3">
                <p className="text-gray-400">Team Only</p>
                <p className="font-medium">No</p>
              </div>
              <div className="p-3">
                <p className="text-gray-400">Weight Ticket</p>
                <p className="font-medium">No</p>
              </div>
            </div>

            <div className="flex flex-col p-4">
              <h3 className="text-white text-md underline font-semibold">
                Notes
              </h3>
              <p className="text-gray-300">
                Carrier must have 24 hours Tracking Via automated updates.
              </p>
            </div>

            <div className="flex space-x-2 p-4">
              <Button className="text-white bg-loadOrange hover:bg-loadOrange/90 w-1/2 py-4">
                Book (1,550.00 USD)
              </Button>
              <Button className="bg-transparent text-white border border-white w-1/2 py-4">
                Make Offer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
