"use client";

import { useState } from "react";
import { Upload, Plus, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const SignUp = () => {
  const [role, setRole] = useState<"Carrier" | "Broker">("Carrier");
  const [equipmentItems, setEquipmentItems] = useState([
    { name: "Super-B #453ERJ07", docProof: false },
    { name: "Flatbed #273YTK38", docProof: false },
  ]);
  const borderColor =
    role === "Carrier" ? "border-[#009AFA80]" : "border-[#FF7B0080]";

  const addEquipment = () => {
    setEquipmentItems([...equipmentItems, { name: "", docProof: false }]);
  };
  return (
    <div className="min-h-screen flex text-white">
      {/* left  */}
      <div className="w-[35%] bg-[#393939] p-6 relative">
        <div className="h-full relative">
          <img
            src={
              role === "Carrier"
                ? "/signup1.png"
                : role === "Broker"
                ? "/signup2.png"
                : ""
            }
            alt=""
            className="w-full h-full object-cover rounded-md"
          />

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto">
            <h2 className="font-bold text-xl">Secure. Reliable. Shipment</h2>
            <p className="max-w-md mx-auto text-center p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Suspendisse potenti. Curabitur vehicula, libero nec
              tincidunt egestas, erat libero aliquet justo, eget fermentum felis
              sapien id nisl. Fusce in nulla sed odio rhoncus tincidunt.
            </p>
          </div>
        </div>
      </div>
      {/* right  */}
      <div className="w-[65%] bg-[#24272B] p-8">
        <div className="">
          <div className="mb-8">
            <Select
              defaultValue={role}
              onValueChange={(value) => setRole(value as "Carrier" | "Broker")}
            >
              <SelectTrigger className="w-32 bg-[#393939] border-none text-white">
                <SelectValue placeholder="Account Type" />
              </SelectTrigger>
              <SelectContent className="bg-[#393939] border-none text-white">
                <SelectItem value="Carrier">Carrier</SelectItem>
                <SelectItem value="Broker">Broker</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <h1 className="text-white text-4xl font-bold mb-2">
            Create your Account
          </h1>
          <p className="text-gray-400 mb-8">
            Seamlessly organize your profile, track every shipment, and manage
            your logistics team—all in one place.
          </p>

          <div className="space-y-6">
            <div>
              <label htmlFor="firstName" className="block text-white mb-2">
                First Name
              </label>
              <Input
                id="firstName"
                placeholder="Eg. (Joe)"
                className={`bg-[#393939] ${borderColor} text-white h-10 placeholder:text-gray-500`}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-white mb-2">
                Last Name
              </label>
              <Input
                id="lastName"
                placeholder="Eg. (Mathew)"
                className={`bg-[#393939] ${borderColor} text-white h-10 placeholder:text-gray-500`}
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-white mb-2">
                Company
              </label>
              <Input
                id="company"
                placeholder="Eg. (NIQ Carriers)"
                className={`bg-[#393939] ${borderColor} text-white h-10 placeholder:text-gray-500`}
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-white mb-2">
                Address
              </label>
              <Input
                id="address"
                placeholder="Eg. (Street-4, North York)"
                className={`bg-[#393939] ${borderColor} text-white h-10 placeholder:text-gray-500`}
              />
            </div>

            {role == "Carrier" ? (
              <div className="grid grid-cols-2">
                <div className="flex flex-col space-y-4 py-4">
                  <div>
                    <label className="block text-white mb-2 text-xl font-semibold">
                      Proof of Company
                    </label>
                    <Card
                      className={`bg-[#393939] ${borderColor} border-dashed h-24 w-1/2 flex items-center justify-center cursor-pointer hover:bg-gray-750`}
                    >
                      <div className="text-center">
                        <Upload className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                        <p className="text-blue-400 text-sm">Upload the Doc.</p>
                      </div>
                    </Card>
                  </div>

                  <div>
                    <label className="block text-white mb-2 text-xl font-semibold">
                      Pictures Of Office
                    </label>
                    <Card
                      className={`bg-[#393939] ${borderColor} border-dashed h-24 w-1/2 flex items-center justify-center cursor-pointer hover:bg-gray-750`}
                    >
                      <div className="text-center">
                        <Upload className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                        <p className="text-blue-400 text-sm">Upload the Doc.</p>
                      </div>
                    </Card>
                  </div>
                </div>

                <div className="py-4 space-y-4 ">
                  <h2 className="text-xl font-semibold">
                    Equipment with proof
                  </h2>

                  {/* Input with Upload button */}
                  <div
                    className={`flex items-center border ${borderColor} rounded-md overflow-hidden`}
                  >
                    <Input
                      className="h-12 bg-transparent border-none placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Eg. (Super-B)"
                    />
                    <Button
                      variant="ghost"
                      className={`h-12 gap-2 border-l ${borderColor} border-dashed rounded-none`}
                    >
                      <Upload className="w-4 h-4" />
                      Upload Doc.
                    </Button>
                  </div>

                  {/* Equipment list */}
                  <div className="space-y-2">
                    {equipmentItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-black p-3 rounded-lg"
                      >
                        <span>{item.name}</span>
                        <Button className="bg-[#009AFA] hover:bg-blue-600 text-white">
                          <FileText className="w-4 h-4" />
                          Doc. Proof
                        </Button>
                      </div>
                    ))}
                    <button className="text-blue-400 text-sm mt-1 hover:underline">
                      +5 more
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <label className="block text-white mb-2">
                    Pictures of Office
                  </label>
                  <Card
                    className={`bg-[#393939] border-dashed ${borderColor} h-32 flex items-center justify-center cursor-pointer hover:bg-gray-750`}
                  >
                    <div className="text-center">
                      <Upload className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                      <p className="text-blue-400 text-sm">Upload the Doc.</p>
                    </div>
                  </Card>
                </div>

                <div>
                  <label className="block text-white mb-2">
                    Pictures of Office
                  </label>
                  <Card
                    className={`bg-[#393939] border-dashed ${borderColor} h-32 flex items-center justify-center cursor-pointer hover:bg-gray-750`}
                  >
                    <div className="text-center">
                      <Upload className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                      <p className="text-blue-400 text-sm">Upload the Doc.</p>
                    </div>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <Button
            className={`text-white px-24 py-2 rounded-full ${
              role === "Carrier"
                ? "bg-[#009AFA] hover:bg-[#007acb]"
                : "bg-[#FF7B00] hover:bg-[#cc6300]"
            }`}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
