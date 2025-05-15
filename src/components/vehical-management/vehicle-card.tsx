"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
export interface Vehicle {
  id: string;
  type: string;
  code: string;
  measurement: string;
  weight: string;
  status: "available" | "out-for-delivery" | "under-maintenance";
}
interface VehicleCardProps {
  vehicle: Vehicle;
  colorClass: string;
}

export default function VehicleCard({ vehicle, colorClass }: VehicleCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: vehicle.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1000 : 1,
  };

  const textColor =
    colorClass === "bg-blue-500"
      ? "text-blue-500"
      : colorClass === "bg-red-500"
      ? "text-red-500"
      : "text-purple-600";

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`bg-gray-800 rounded-lg p-4 cursor-grab active:cursor-grabbing ${
        isDragging ? "ring-2 ring-white" : ""
      }`}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className={`text-lg font-medium ${textColor}`}>{vehicle.type}</h3>
        <div className="text-right">
          <p className="text-xs text-gray-400">Measurement:</p>
          <p className="text-sm text-white">{vehicle.measurement}</p>
        </div>
      </div>
      <p className="text-gray-400">{vehicle.code}</p>
      <div className="mt-2">
        <p className="text-xs text-gray-400">Weight:</p>
        <p className="text-sm text-white">{vehicle.weight}</p>
      </div>
    </div>
  );
}
