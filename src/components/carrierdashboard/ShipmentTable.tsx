import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ShipmentTable = () => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Previous Shipments</h3>
      <div className="bg-loadLightBlue dark:bg-loadGray rounded-xl overflow-hidden p-4">
        <div className="grid grid-cols-5 gap-4 p-2 text-loadBlue">
          <div>Load No.</div>
          <div>Package Details</div>
          <div>Broker Details</div>
          <div>Shipping Location</div>
          <div>Trucker Details</div>
        </div>
        {[1, 2, 3, 4].map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-4 p-4 border border-gray-400 rounded-sm m-1 text-sm"
          >
            <div>#{753785000 + index * 1000}</div>
            <div>Lorem ipsum dolor sit amet...</div>
            <div>
              {index === 0
                ? "Danial"
                : index === 1
                ? "John"
                : index === 2
                ? "Ansh"
                : "Vick"}
              , 090-XX-X
            </div>
            <div>KONG — KVP</div>
            <div className="flex items-center justify-between">
              <span>Danial, 090-XX-X</span>
              <Link href="#" className="text-loadBlue">
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShipmentTable;
