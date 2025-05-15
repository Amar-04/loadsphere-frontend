"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";

const chartData = [
  { name: "Positive Rev.", value: 80 },
  { name: "On-time Delivery", value: 90 },
  { name: "Success Delivery", value: 75 },
];

const COLORS = ["#FF914D"];

const DonutChart = ({ value }: { value: number }) => {
  const data = [
    { name: "filled", value },
    { name: "remaining", value: 100 - value },
  ];
  return (
    <PieChart width={100} height={100}>
      <Pie
        data={data}
        innerRadius={30}
        outerRadius={45}
        startAngle={90}
        endAngle={-270}
        dataKey="value"
        stroke="none"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={index === 0 ? COLORS[0] : "#393939"}
          />
        ))}
      </Pie>
    </PieChart>
  );
};

const Cards = () => {
  const data = [
    { month: "Apr.", hours: 120 },
    { month: "May", hours: 200 },
    { month: "June", hours: 150 },
    { month: "Jul.", hours: 80 },
    { month: "Aug.", hours: 70 },
    { month: "Sept.", hours: 110 },
  ];
  return (
    <div className="grid grid-cols-3 gap-8 my-4">
      <Card className="bg-loadOrange dark:bg-loadGray dark:text-white rounded-4xl border-none">
        <CardContent className="flex flex-col space-y-4">
          <h1 className="text-xl font-bold">Total Time</h1>
          <div className="flex">
            <h1 className="text-5xl font-bold">3150</h1>
            <p className="text-loadOrange mt-6 ml-2 font-bold">Hours</p>
          </div>
          <p className="text-gray-400">April to Sept.</p>
        </CardContent>
      </Card>

      <Card className="bg-loadOrange dark:bg-loadGray dark:text-white rounded-4xl border-none">
        <CardContent className="flex flex-col space-y-4">
          <h1 className="text-xl font-bold">Total Shipments</h1>
          <div className="flex">
            <h1 className="text-5xl font-bold">485</h1>
            <p className="text-loadOrange mt-6 ml-2 font-bold">Ctnr</p>
          </div>
          <p className="text-gray-400">April to Sept.</p>
        </CardContent>
      </Card>

      <Card className="bg-loadOrange dark:bg-loadGray dark:text-white rounded-4xl border-none">
        <CardContent className="flex flex-col space-y-4">
          <h1 className="text-xl font-bold">Total Distance</h1>
          <div className="flex">
            <h1 className="text-5xl font-bold">9150</h1>
            <p className="text-loadOrange mt-6 ml-2 font-bold">Kms</p>
          </div>
          <p className="text-gray-400">April to Sept.</p>
        </CardContent>
      </Card>

      <Card className="bg-loadOrange dark:bg-loadGray col-span-2 rounded-4xl border-none">
        <CardContent className="flex flex-col space-y-10">
          <h2 className="text-xl dark:text-white font-bold">Time Worked</h2>
          <ChartContainer
            className="h-[300px]"
            config={{
              hours: {
                color: "#67c6ff",
              },
            }}
          >
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid
                horizontal={true}
                vertical={false}
                stroke="#82889880"
                strokeDasharray="3 3"
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                stroke="#999"
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                stroke="#999"
                domain={[0, 200]}
                ticks={[0, 50, 100, 150, 200]}
              />
              <Bar
                dataKey="hours"
                fill="#FF914D"
                radius={[4, 4, 0, 0]}
                barSize={40}
                isAnimationActive={true}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="rounded-4xl bg-loadOrange dark:bg-loadGray dark:text-white border-none">
        <CardContent className="flex flex-col">
        <h2 className="text-xl dark:text-white font-bold">Carrier Analysis</h2>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <DonutChart value={80} />
              <span className="text-sm mt-2">Positive Rev.</span>
            </div>
            <div className="flex flex-col items-center">
              <DonutChart value={90} />
              <span className="text-sm mt-2">On-time Delivery</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <DonutChart value={75} />
            <span className="text-sm mt-2">Success Delivery</span>
          </div>
        </CardContent>

        <div className="flex items-center justify-between border-t border-gray-600 px-6 py-2">
          <Button className="bg-white dark:bg-loadDarkGray p-6 rounded-xl text-loadOrange hover:bg-loadOrange text-sm font-medium">
            Month
          </Button>
          <Button className="bg-white dark:bg-loadDarkGray p-6 rounded-xl text-black hover:bg-loadOrange dark:text-white text-sm font-medium">
            April -- September
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Cards;
