"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import VehicleBoard from "@/components/vehical-management/vehicle-board";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <div className="my-4 flex gap-4">
        {/* Dialog Trigger and Content */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-loadBlue text-white">Add Truck +</Button>
          </DialogTrigger>
          <DialogContent className="bg-[#222222] border-[#333333] text-white max-w-md p-0 overflow-hidden">
            <DialogHeader className="p-6 pb-2">
              <DialogTitle className="text-xl font-medium">
                Post Truck
              </DialogTitle>
            </DialogHeader>
            <form className="space-y-6 p-6 pt-2">
              {/* Equipment Section */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="equipment" className="font-medium">
                      Equipment
                    </Label>
                    <Input
                      name="equipment"
                      placeholder="Eg: Super-B"
                      className="bg-[#333333] border-[#444444] h-10 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trailerLength" className="font-medium">
                      Trailer length (m)
                    </Label>
                    <Input
                      id="trailerLength"
                      name="trailerLength"
                      className="bg-[#333333] border-[#444444] h-10 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Origin Section */}
              <div className="space-y-4">
                <h3 className="font-medium">Origin</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="originCountry"
                      className="text-sm text-gray-400"
                    >
                      Origin Country
                    </Label>
                    <Input
                      id="originCountry"
                      name="originCountry"
                      placeholder="Example"
                      className="bg-[#333333] border-[#444444] h-10 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="originCity"
                      className="text-sm text-gray-400"
                    >
                      City
                    </Label>
                    <Input
                      id="originCity"
                      name="originCity"
                      className="bg-[#333333] border-[#444444] h-10 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Destination Section */}
              <div className="space-y-4">
                <h3 className="font-medium">Destination</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="destinationCountry"
                      className="text-sm text-gray-400"
                    >
                      Destination Country
                    </Label>
                    <Input
                      id="destinationCountry"
                      name="destinationCountry"
                      placeholder="Example"
                      className="bg-[#333333] border-[#444444] h-10 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="destinationCity"
                      className="text-sm text-gray-400"
                    >
                      City
                    </Label>
                    <Input
                      id="destinationCity"
                      name="destinationCity"
                      className="bg-[#333333] border-[#444444] h-10 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="space-y-4">
                <h3 className="font-medium">Contact</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dialCode" className="text-sm text-gray-400">
                      Dial Code
                    </Label>
                    <Input
                      id="dialCode"
                      name="dialCode"
                      placeholder="Example"
                      className="bg-[#333333] border-[#444444] h-10 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phoneNumber"
                      className="text-sm text-gray-400"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="(XXX-XXXX/XXX)"
                      className="bg-[#333333] border-[#444444] h-10 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="extension"
                      className="text-sm text-gray-400"
                    >
                      Extension
                    </Label>
                    <Input
                      id="extension"
                      name="extension"
                      placeholder="--"
                      className="bg-[#333333] border-[#444444] h-10 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  className="bg-[#0099ff] hover:bg-[#0088ee] text-white font-medium px-6"
                >
                  Add Truck
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {/* Filter button (unchanged) */}
        <Button className="bg-transparent border text-gray-300 px-6 hover:text-black">
          Filter
        </Button>
      </div>

      <VehicleBoard />
    </main>
  );
}
