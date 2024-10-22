"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radial chart with text";

const chartData = [
  { gender: "Laki Laki", total: 32, fill: "#34d399" },
  { gender: "Perempuan", total: 18, fill: "#22d3ee" },
];

const chartConfig = {
  gender: {
    label: "Gender",
  },
} satisfies ChartConfig;

export function GenderStat() {
  const totalStudents = chartData.reduce((acc, { total }) => acc + total, 0);

  return (
    <ChartContainer config={chartConfig} className="mx-auto h-full bg-emerald">
      <RadialBarChart
        data={chartData}
        startAngle={0}
        endAngle={320}
        innerRadius={80}
        outerRadius={110}
      >
        <ChartTooltip
          content={
            <ChartTooltipContent
              indicator="dot"
              formatter={(value, name, item) => {
                console.log(item);
                return (
                  <div className="flex gap-3">
                    <div className="flex gap-2 items-center">
                      <span
                        className="inline-block w-2 h-2 rounded-[2px]"
                        style={{ backgroundColor: item.payload.fill }}
                      />

                      <span className="capitalize">{item.payload.gender}</span>

                      <span className="capitalize font-medium">
                        {item.payload.total} Murid
                      </span>
                    </div>
                  </div>
                );
              }}
            />
          }
          cursor
        />

        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-muted last:fill-background"
          polarRadius={[86, 74]}
        />
        <RadialBar dataKey="total" background cornerRadius={10} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-4xl font-bold"
                    >
                      {totalStudents}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      Total Murid
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
