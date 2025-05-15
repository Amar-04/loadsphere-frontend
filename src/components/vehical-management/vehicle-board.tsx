"use client";

import { useState } from "react";
import { DndContext, type DragEndEvent, closestCorners } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import StatusColumn from "./status-column";
export interface Vehicle {
  id: string;
  type: string;
  code: string;
  measurement: string;
  weight: string;
  status: "available" | "out-for-delivery" | "under-maintenance";
}
export default function VehicleBoard() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    {
      id: "1",
      type: "Van",
      code: "435-ARX",
      measurement: "50m X 105m",
      weight: "Upto 15000 kg",
      status: "available",
    },
    {
      id: "2",
      type: "Super-B",
      code: "435-ARX",
      measurement: "70m X 120m",
      weight: "Upto 25000 kg",
      status: "available",
    },
    {
      id: "3",
      type: "Flatbed",
      code: "435-ARX",
      measurement: "70m X 120m",
      weight: "Upto 20000 kg",
      status: "available",
    },
    {
      id: "4",
      type: "Van",
      code: "435-ARX",
      measurement: "50m X 105m",
      weight: "Upto 15000 kg",
      status: "available",
    },
    {
      id: "5",
      type: "Super-B",
      code: "435-ARX",
      measurement: "70m X 120m",
      weight: "Upto 25000 kg",
      status: "available",
    },
    {
      id: "6",
      type: "Van",
      code: "435-ARX",
      measurement: "50m X 105m",
      weight: "Upto 15000 kg",
      status: "out-for-delivery",
    },
    {
      id: "7",
      type: "Super-B",
      code: "435-ARX",
      measurement: "70m X 120m",
      weight: "Upto 25000 kg",
      status: "out-for-delivery",
    },
    {
      id: "8",
      type: "Flatbed",
      code: "435-ARX",
      measurement: "70m X 120m",
      weight: "Upto 20000 kg",
      status: "out-for-delivery",
    },
    {
      id: "9",
      type: "Super-B",
      code: "435-ARX",
      measurement: "70m X 120m",
      weight: "Upto 25000 kg",
      status: "under-maintenance",
    },
  ]);

  const availableVehicles = vehicles.filter(
    (vehicle) => vehicle.status === "available"
  );
  const outForDeliveryVehicles = vehicles.filter(
    (vehicle) => vehicle.status === "out-for-delivery"
  );
  const underMaintenanceVehicles = vehicles.filter(
    (vehicle) => vehicle.status === "under-maintenance"
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
        | "under-maintenance";

      setVehicles(
        vehicles.map((vehicle) =>
          vehicle.id === activeId ? { ...vehicle, status: newStatus } : vehicle
        )
      );
      return;
    }

    // If dropping on another vehicle (for reordering within a column)
    const activeVehicle = vehicles.find((v) => v.id === activeId);
    const overVehicle = vehicles.find((v) => v.id === overId);

    if (!activeVehicle || !overVehicle) return;

    // If dropping on a vehicle in a different column, update the status
    if (activeVehicle.status !== overVehicle.status) {
      setVehicles(
        vehicles.map((vehicle) =>
          vehicle.id === activeId
            ? { ...vehicle, status: overVehicle.status }
            : vehicle
        )
      );
      return;
    }

    // Otherwise, reorder within the same column
    const activeIndex = vehicles.findIndex((v) => v.id === activeId);
    const overIndex = vehicles.findIndex((v) => v.id === overId);

    if (activeIndex !== overIndex) {
      setVehicles(arrayMove(vehicles, activeIndex, overIndex));
    }
  }

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SortableContext items={availableVehicles.map((v) => v.id)}>
          <StatusColumn
            id="available-column"
            title="Available"
            vehicles={availableVehicles}
            colorClass="bg-blue-500"
          />
        </SortableContext>

        <SortableContext items={outForDeliveryVehicles.map((v) => v.id)}>
          <StatusColumn
            id="out-for-delivery-column"
            title="Out-For-Delivery"
            vehicles={outForDeliveryVehicles}
            colorClass="bg-red-500"
          />
        </SortableContext>

        <SortableContext items={underMaintenanceVehicles.map((v) => v.id)}>
          <StatusColumn
            id="under-maintenance-column"
            title="Under Maintenance"
            vehicles={underMaintenanceVehicles}
            colorClass="bg-purple-600"
          />
        </SortableContext>
      </div>
    </DndContext>
  );
}
