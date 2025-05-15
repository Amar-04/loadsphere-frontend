"use client";

import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import Image from "next/image";
import CanadaMap from "@/components/CanadaMap";

export default function LiveTracking() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);

  return (
    <div className="flex flex-col  text-gray-200">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-800">
        <h1 className="text-xl font-semibold">Live Tracking</h1>

        <div className="flex gap-2 ml-[12rem] ">
          <button className="flex items-center gap-2 px-4 py-2  rounded border border-gray-700">
            Status <ChevronDown className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2  rounded border border-gray-700">
            Dispatch <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row h-full overflow-hidden">
        {/* Vehicle list */}
        <div className="w-full px-2 md:w-80 overflow-y-auto border-r border-gray-800  ">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className={`p-4 border-b  mb-2 bg-loadGray border-gray-800 cursor-pointer transition-colors ${
                selectedVehicle.id === vehicle.id ? "bg-gray-800" : ""
              }`}
              onClick={() => setSelectedVehicle(vehicle)}
            >
              <div className="flex items-center gap-2 mb-2  ">
                {/* <div
                  className={`h-2 w-2 rounded-full ${vehicle.status === "active" ? "bg-green-500" : "bg-gray-500"}`}
                ></div> */}
                <div className="font-medium">{vehicle.vehicleNumber}</div>
                <div className="text-white">{vehicle.vehicleId}</div>
              </div>
              <div className="text-loadBlue font-medium">
                {vehicle.driverName}
              </div>
              <div className="text-sm text-white ">{vehicle.vehicleCode}</div>
              {vehicle.distance && (
                <div className="text-sm">{vehicle.distance} mi</div>
              )}
              {vehicle.eta && (
                <div className="text-white text-xs">{vehicle.eta}</div>
              )}
              {vehicle.location && (
                <div className="text-[#D9D9D9] text-xs mt-1">
                  {vehicle.location}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Vehicle details and map */}
        <div className="flex-1 flex flex-col">
          {/* Vehicle details */}
          <div className="p-4 border-b bg-loadGray border-gray-800">
            <div className="flex items-center justify-between ">
              <div>
                <div className="text-lg text-white">
                  #{selectedVehicle.vehicleId}
                </div>
                <div className="text-loadBlue font-medium text-lg">
                  {selectedVehicle.driverName}
                </div>
                <div className="text-lg">{selectedVehicle.vehicleCode}</div>
              </div>

              <div className=" flex flex-col ">
                

                <div className="flex">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-loadBlue">Pickup</div>
                    </div>
                    <div className="text-xs text-white ">
                      {selectedVehicle.pickup?.location}
                    </div>
                  </div>

                  <div className="flex-1 ml-5 ">
                    <div className="flex items-center ">
                      <div className="text-sm font-medium text-loadBlue">Dropoff</div>
                    </div>
                    <div className="text-xs text-white ">
                      {selectedVehicle.dropoff?.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Comment Here:"
                  className="w-full bg-[#202020] border border-gray-700 rounded px-3 py-3 text-sm"
                />
                <button className="absolute right-2 top-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm">
                  Notify Broker
                </button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="flex-1 relative">
            <CanadaMap />
          </div>
        </div>
      </div>
    </div>
  );
}

// Mock data
const vehicles = [
  {
    id: 1,
    vehicleNumber: "02 Volvo",
    vehicleId: "7538053688",
    driverName: "Gurwinder Singh",
    vehicleCode: "435 - ARX",
    distance: "638",
    eta: "ETA 04/04, 09:00 am MST",
    status: "active",
    pickup: {
      location: "KONG North Canton, OH, US",
    },
    dropoff: {
      location: "KYP, McKinney, TX, US",
    },
  },
  {
    id: 2,
    vehicleNumber: "14 Volvo",
    vehicleId: "7538055XXX",
    driverName: "John Ruth",
    vehicleCode: "478 - ARX",
    status: "inactive",
    location: "Trans-Canada Highway/Yellowhead Hwy, Portage la Prairie, MB",
  },
  {
    id: 3,
    vehicleNumber: "07 Freightliner",
    vehicleId: "75380XXXX",
    driverName: "Arish Mehta",
    vehicleCode: "755 - ATX",
    status: "inactive",
    location: "Trans-Canada Highway/Yellowhead Hwy, Portage la Prairie, MB",
  },
  {
    id: 4,
    vehicleNumber: "09 Volvo",
    vehicleId: "753XXX368",
    driverName: "Gurpreet Singh",
    vehicleCode: "435 - OAX",
    status: "inactive",
    location: "Trans-Canada Highway/Yellowhead Hwy, Portage la Prairie, MB",
  },
  {
    id: 5,
    vehicleNumber: "02 Volvo",
    vehicleId: "753XXX368",
    driverName: "Gurwinder Singh",
    vehicleCode: "435 - ARX",
    status: "inactive",
    location: "Trans-Canada Highway/Yellowhead Hwy, Portage la Prairie, MB",
  },
  {
    id: 6,
    vehicleNumber: "02 Volvo",
    vehicleId: "753XXX368",
    driverName: "Gurwinder Singh",
    vehicleCode: "435 - ARX",
    status: "inactive",
    location: "Trans-Canada Highway/Yellowhead Hwy, Portage la Prairie, MB",
  },
];
