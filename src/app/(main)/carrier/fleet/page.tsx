"use client";

import CanadaMap from "@/components/CanadaMap";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Truck Availability",
    description:
      "Manage and Post trucks which are available/ out for Delivery/Under maintainance.",
    image: "/load1.jpg",
    link: "/carrier/fleet/truck-availability",
  },
  {
    title: "Track Fleet Location",
    description:
      "Track your Fleet’s location without any delay and current progress.",
    image: "/load2.jpg",
    link: "/carrier/fleet/track-fleet",
  },
  {
    title: "Manage Equipment",
    description:
      "Easily manage and monitor all your essential equipment and tools.",
    image: "/load3.jpg",
    link: "/carrier/fleet/manage-equipment",
  },
];

const page = () => {
  return (
    <div className="min-h-screen flex flex-col p-6 space-y-8">
      <h1 className="text-2xl font-semibold">Priority Fleet Tracking</h1>
      <div className="bg-loadLightBlue dark:bg-loadGray rounded-md flex flex-col space-y-2 p-2">
        <div className="border h-60">
          <CanadaMap />
        </div>
        <div className="bg-white dark:bg-loadDarkGray flex items-center justify-between p-1 rounded-md">
          <h3>Load #753805368</h3>
          <h3 className="flex gap-2">
            KONG, OH, US <ArrowRight /> KVP, TX, US
          </h3>
          <Button className="bg-loadLightBlue dark:bg-loadBlue">
            Message Driver
          </Button>
        </div>
      </div>

      {/* cards  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Link key={index} href={feature.link} passHref>
            <div className="cursor-pointer rounded-2xl overflow-hidden shadow-md bg-loadLightBlue dark:bg-loadGray transition-transform transform hover:scale-[1.02]">
              <div className="relative w-full h-48">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
