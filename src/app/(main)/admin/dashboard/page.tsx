"use client";

import Cards from "@/components/admindashboard/Cards";
import ShipmentTable from "@/components/admindashboard/ShipmentTable";
import React, { useState } from "react";

const page = () => {
  const [active, setActive] = useState("Month");

  return (
    <div className="p-6 flex flex-col">
      {/* filter buttons  */}

      <div className="flex justify-end">
        <div className="flex items-center gap-4">
          {/* Day / Month / Year buttons */}
          {["Day", "Month", "Year"].map((opt) => (
            <button
              key={opt}
              onClick={() => setActive(opt)}
              className={`px-4 py-1 rounded-full text-sm font-medium ${
                active === opt
                  ? "bg-loadPurple text-white"
                  : "bg-loadLightBlue dark:bg-loadGray text-loadPurple"
              }`}
            >
              {opt}
            </button>
          ))}

          {/* Date range */}
          <div className="flex items-center bg-loadLightBlue dark:bg-loadGray px-4 py-1 rounded-full text-sm font-medium text-loadPurple gap-2">
            <span className="uppercase">April</span>
            <span className="text-white">–</span>
            <span className="capitalize">Sept.</span>
          </div>
        </div>
      </div>

      <Cards />
      <ShipmentTable />
    </div>
  );
};

export default page;
