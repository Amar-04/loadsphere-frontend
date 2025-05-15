"use client";

import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import VehicleCard from "./vehicle-card";
import { CircleCheck, Truck, Wrench } from "lucide-react";
export interface Vehicle {
  id: string;
  type: string;
  code: string;
  measurement: string;
  weight: string;
  status: "available" | "out-for-delivery" | "under-maintenance";
}

interface StatusColumnProps {
  id: string;
  title: string;
  vehicles: Vehicle[];
  colorClass: string;
}

export default function StatusColumn({
  id,
  title,
  vehicles,
  colorClass,
}: StatusColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex flex-col h-full min-h-[500px] rounded-lg overflow-hidden transition-all duration-200`}
      style={{
        backgroundColor:
          colorClass === "bg-blue-500"
            ? "rgba(59, 130, 246, 0.1)"
            : colorClass === "bg-red-500"
            ? "rgba(239, 68, 68, 0.1)"
            : "rgba(124, 58, 237, 0.1)",
      }}
    >
      <div
        className={`${colorClass} text-white p-4 font-medium flex items-center`}
      >
        <span className="mr-2">
          {title === "Available" ? (
            <CircleCheck />
          ) : title === "Out-For-Delivery" ? (
            <Truck />
          ) : (
            <Wrench />
          )}
        </span>
        {title}
      </div>
      <div className="p-4 space-y-4 overflow-y-auto max-h-[600px]">
        <SortableContext items={vehicles.map((v) => v.id)}>
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              colorClass={colorClass}
            />
          ))}
        </SortableContext>
        {vehicles.length === 0 && (
          <div className="h-full min-h-[100px] flex items-center justify-center text-gray-400 border-2 border-dashed rounded-lg p-4">
            Drop vehicle here
          </div>
        )}
      </div>
    </div>
  );
}
