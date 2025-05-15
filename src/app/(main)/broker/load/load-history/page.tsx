"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Load {
  id: string;
  dateTime: string;
  carrier: string;
  route: string;
  trailer: string;
  status: "Yet to Assign" | "Assigned" | "In Transit";
  payment: string;
}

export default function Page() {
  const [open, setOpen] = useState(false);
  const [driver, setDriver] = useState("");
  const [trailer, setTrailer] = useState("");
  const onOpenChange = (isOpen: boolean) => setOpen(isOpen);

  const confirmedLoads: Load[] = Array(10)
    .fill(null)
    .map((_, i) => ({
      id: "549494XXXX",
      dateTime: "Mar 20, 2025| 9:00 AM",
      carrier: "John Ruth",
      route: "Toronto - Chicago",
      trailer: "Super-B",
      status: "Yet to Assign",
      payment: "$2400",
    }));

  const pendingLoads: Load[] = Array(10)
    .fill(null)
    .map((_, i) => ({
      id: "549494XXXX",
      dateTime: "Mar 20, 2025| 9:00 AM",
      carrier: "John Ruth",
      route: "Toronto - Chicago",
      trailer: "Super-B",
      status: "Yet to Assign",
      payment: "$2400",
    }));

  const previousLoads: Load[] = Array(10)
    .fill(null)
    .map((_, i) => ({
      id: "549494XXXX",
      dateTime: "Mar 20, 2025| 9:00 AM",
      carrier: "John Ruth",
      route: "Toronto - Chicago",
      trailer: "Super-B",
      status: "Yet to Assign",
      payment: "$2400",
    }));

  return (
    <div className="flex flex-col p-6">
      <div className="w-full border-b border-white mx-6">
        <div className="flex justify-between font-bold w-[40%]">
          <Button className="bg-transparent rounded-md text-white text-lg hover:bg-loadOrange">
            Confirmed
          </Button>
          <Button className="bg-transparent rounded-md text-white text-lg hover:bg-loadOrange">
            Pending
          </Button>
          <Button className="bg-transparent rounded-md text-white text-lg hover:bg-loadOrange">
            Previous
          </Button>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden p-4">
        <div className="grid grid-cols-8 gap-4 p-2 text-gray-400">
          <div>Load Id</div>
          <div>Date & Time (Pickup)</div>
          <div>Carrier</div>
          <div>Origin & Destination</div>
          <div>Trailer Req.</div>
          <div>Status</div>
          <div>Payment</div>
        </div>
        {confirmedLoads.map((load, index) => (
          <div
            key={index}
            className="grid grid-cols-8 gap-4 p-4 border border-gray-400 rounded-sm m-1 text-sm cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <div>#{load.id}</div>
            <div>{load.dateTime}</div>
            <div>{load.carrier}</div>
            <div>{load.route}</div>
            <div>{load.trailer}</div>
            <div>{load.status}</div>
            <div>{load.payment}</div>

            <Button className="text-loadOrange bg-transparent hover:bg-transparent cursor-pointer">
              <ArrowRight size={18} />
            </Button>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-loadGray min-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Load Details
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-2">
            <div className="flex justify-between">
              <div>
                <p className="text-muted-foreground text-sm">
                  Load{" "}
                  <span className="text-loadOrange font-medium">#753805368</span>
                </p>

                <p className="text-lg font-bold">Rate: 1550.00 USD</p>
              </div>
              <div className="rounded-lg px-4 space-y-2">
                <div className="flex items-center justify-between space-x-4">
                  <div>
                    <p className="text-xs text-muted-foreground">PICKUP</p>
                    <p className="font-medium">North Canton, OH</p>
                    <p className="text-sm text-muted-foreground">
                      04/02/2025 • 08:00 AM - 02:00 PM
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">DROPOFF</p>
                    <p className="font-medium">McKinney, TX</p>
                    <p className="text-sm text-muted-foreground">
                      04/04/2025 • 09:00 AM
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm mt-2">
                  <div>
                    <span className="text-muted-foreground">Equipment:</span>{" "}
                    <br />
                    Van
                  </div>
                  <div>
                    <span className="text-muted-foreground">Distance:</span>{" "}
                    <br />
                    1800 km
                  </div>
                  <div>
                    <span className="text-muted-foreground">
                      Weight: <br />
                    </span>{" "}
                    9800 kg
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="space-y-1.5">
                <Label>Driver Name</Label>
                <Input value="Gurmeet Singh" readOnly />
              </div>
              <div className="space-y-1.5">
                <Label>Trailer Assigned</Label>
                <Input value="07 Van" readOnly />
              </div>
            </div>

            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="ghost" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button
                className="bg-loadOrange text-white"
                onClick={() => {
                  /* Handle Confirm */
                }}
              >
                Confirm
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
