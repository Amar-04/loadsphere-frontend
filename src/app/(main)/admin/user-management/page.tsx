"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp } from "lucide-react";
import { PieChart, Pie, Cell } from "recharts";
import UserTable from "@/components/admin/UserTable";

const data = [
  { name: "Broker", value: 30, color: "#FB923C" }, // Orange
  { name: "Carrier", value: 50, color: "#60A5FA" }, // Blue
  { name: "Driver", value: 20, color: "#5EEAD4" }, // Teal
];

const labelColors: Record<string, string> = {
  Broker: "text-orange-400",
  Carrier: "text-blue-400",
  Driver: "text-teal-300",
};

const bgColors: Record<string, string> = {
  Broker: "bg-orange-100",
  Carrier: "bg-blue-100",
  Driver: "bg-teal-100",
};

const page = () => {
  return (
    <div className="p-6 flex flex-col">
      <div className="flex space-x-8">
        <Card className="bg-loadPurple dark:bg-loadGray dark:text-white rounded-2xl border-none">
          <CardContent className="flex flex-col space-y-4">
            <h1 className="text-xl font-bold">Total Users</h1>
            <h1 className="text-5xl font-bold">3150</h1>
            <div className="flex items-center gap-1">
              <Badge className="rounded-xl">
                <p className="text-green-500 flex items-center">
                  <ArrowUp />
                  10.02%
                </p>
              </Badge>
              <p className="text-gray-400 text-sm">than last month</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-loadPurple dark:bg-loadGray dark:text-white rounded-2xl border-none">
          <CardContent className="flex flex-col space-y-4">
            <h1 className="text-xl font-bold">New Registrations</h1>
            <h1 className="text-5xl font-bold">3150</h1>
            <div className="flex items-center gap-1">
              <Badge className="rounded-xl">
                <p className="text-green-500 flex items-center">
                  <ArrowUp />
                  10.02%
                </p>
              </Badge>
              <p className="text-gray-400 text-sm">than last month</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-loadPurple dark:bg-loadGray dark:text-white rounded-2xl border-none">
          <CardContent className="flex flex-col space-y-4">
            <h1 className="text-xl font-bold">Active Users</h1>
            <h1 className="text-5xl font-bold">3150</h1>
            <div className="flex items-center gap-1">
              <Badge className="rounded-xl">
                <p className="text-green-500 flex items-center">
                  <ArrowUp />
                  10.02%
                </p>
              </Badge>
              <p className="text-gray-400 text-sm">than last month</p>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2  bg-loadPurple dark:bg-loadGray dark:text-white rounded-2xl border-none">
          <div className="grid grid-cols-2 gap-2 items-center py-2 px-6">
            <div>
              <PieChart width={130} height={130}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={25}
                  outerRadius={60}
                  paddingAngle={3}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </div>
            <div className="space-y-2">
              {data.map(({ name, value }) => (
                <div key={name} className="flex items-center gap-2">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-bold ${bgColors[name]} text-black`}
                  >
                    {name}
                  </span>
                  <span
                    className={`${labelColors[name]} text-sm font-semibold`}
                  >
                    -- {value}% User
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <UserTable />
    </div>
  );
};

export default page;
