"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export interface Load {
  id: string;
  trailerRequirement: string;
  measurement: {
    length: number;
    width: number;
  };
  weight: number;
  status: "available" | "out-for-delivery" | "assign-pending";
}

interface VehicleCardProps {
  vehicle: Load;
  colorClass: string;
}

export default function LoadCard({ vehicle, colorClass }: VehicleCardProps) {
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

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`bg-[#393939] rounded-lg p-4 text-white shadow-md cursor-grab active:cursor-grabbing ${
        isDragging ? "ring-2 ring-white" : ""
      }`}
    >
      <div
        className={`font-bold text-lg mb-1 ${
          vehicle.status === "available"
            ? "text-orange-400"
            : vehicle.status === "out-for-delivery"
            ? "text-red-500"
            : "text-purple-400"
        }`}
      >
        #{vehicle.id.slice(0, 4)}XXXXX
      </div>

      <div className="text-sm text-gray-300 mb-1">
        Trailer Req:{" "}
        <span className="text-white">{vehicle.trailerRequirement}</span>
      </div>
      <div className="text-sm text-gray-300 mb-1">
        Measurement:{" "}
        <span className="text-white">
          {vehicle.measurement.length}m X {vehicle.measurement.width}m
        </span>
      </div>
      <div className="text-sm text-gray-300">
        Weight:{" "}
        <span className="text-white font-semibold">{vehicle.weight} kg</span>
      </div>
    </div>
  );
}
