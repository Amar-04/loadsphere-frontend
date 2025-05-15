"use client";

import { useState } from "react";
import { DndContext, type DragEndEvent, closestCorners } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import StatusColumn from "./status-column";
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
export default function VehicleBoard() {
  const [loads, setLoads] = useState<Load[]>([
    {
      id: "1",
      trailerRequirement: "Super-B",
      measurement: { length: 50, width: 105 },
      weight: 9800,
      status: "available",
    },
    {
      id: "2",
      trailerRequirement: "Super-B",
      measurement: { length: 50, width: 105 },
      weight: 9800,
      status: "available",
    },
    {
      id: "3",
      trailerRequirement: "Super-B",
      measurement: { length: 50, width: 105 },
      weight: 9800,
      status: "available",
    },
    {
      id: "4",
      trailerRequirement: "Super-B",
      measurement: { length: 50, width: 105 },
      weight: 9800,
      status: "available",
    },
    {
      id: "5",
      trailerRequirement: "Super-B",
      measurement: { length: 50, width: 105 },
      weight: 9800,
      status: "out-for-delivery",
    },
    {
      id: "6",
      trailerRequirement: "Super-B",
      measurement: { length: 50, width: 105 },
      weight: 9800,
      status: "out-for-delivery",
    },
    {
      id: "7",
      trailerRequirement: "Super-B",
      measurement: { length: 50, width: 105 },
      weight: 9800,
      status: "out-for-delivery",
    },
    {
      id: "8",
      trailerRequirement: "Super-B",
      measurement: { length: 50, width: 105 },
      weight: 9800,
      status: "assign-pending",
    },
  ]);

  const availableLoads = loads.filter((load) => load.status === "available");
  const outForDeliveryLoads = loads.filter(
    (load) => load.status === "out-for-delivery"
  );
  const underMaintenanceLoads = loads.filter(
    (load) => load.status === "assign-pending"
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    // If dropping on a column
    if (overId.includes("column")) {
      const newStatus = overId.replace("-column", "") as
        | "available"
        | "out-for-delivery"
        | "assign-pending";

      setLoads(
        loads.map((load) =>
          load.id === activeId ? { ...load, status: newStatus } : load
        )
      );
      return;
    }

    // If dropping on another vehicle (for reordering within a column)
    const activeVehicle = loads.find((l) => l.id === activeId);
    const overVehicle = loads.find((l) => l.id === overId);

    if (!activeVehicle || !overVehicle) return;

    // If dropping on a vehicle in a different column, update the status
    if (activeVehicle.status !== overVehicle.status) {
      setLoads(
        loads.map((load) =>
          load.id === activeId ? { ...load, status: overVehicle.status } : load
        )
      );
      return;
    }

    // Otherwise, reorder within the same column
    const activeIndex = loads.findIndex((l) => l.id === activeId);
    const overIndex = loads.findIndex((l) => l.id === overId);

    if (activeIndex !== overIndex) {
      setLoads(arrayMove(loads, activeIndex, overIndex));
    }
  }

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SortableContext items={availableLoads.map((l) => l.id)}>
          <StatusColumn
            id="available-column"
            title="Available"
            vehicles={availableLoads}
            colorClass="bg-orange-500"
          />
        </SortableContext>

        <SortableContext items={outForDeliveryLoads.map((l) => l.id)}>
          <StatusColumn
            id="out-for-delivery-column"
            title="Out-For-Delivery"
            vehicles={outForDeliveryLoads}
            colorClass="bg-red-500"
          />
        </SortableContext>

        <SortableContext items={underMaintenanceLoads.map((v) => v.id)}>
          <StatusColumn
            id="under-maintenance-column"
            title="Assign Pending"
            vehicles={underMaintenanceLoads}
            colorClass="bg-purple-600"
          />
        </SortableContext>
      </div>
    </DndContext>
  );
}
