"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatRupiah } from "@/lib/format";

const chartData = [
  { month: "Januari", value: 186000 },
  { month: "Februari", value: 305000 },
  { month: "Maret", value: 237000 },
  { month: "April", value: 73000 },
  { month: "Mei", value: 209000 },
  { month: "Juni", value: 214000 },
  { month: "Juli", value: 314000 },
  { month: "Agustus", value: 414000 },
  { month: "September", value: 114000 },
  { month: "Oktober", value: 218000 },
  { month: "November", value: 224000 },
  { month: "Desember", value: 114000 },
];

const chartConfig = {
  value: {
    label: "Tabungan",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function SavingChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="max-h-[300px] min-h-[300px] w-full"
    >
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />

        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />

        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              formatter={(value, name, item) => {
                return (
                  <div className="flex gap-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-block h-2 w-2 rounded-[2px]"
                        style={{ backgroundColor: item.color }}
                      />

                      <span className="capitalize">Total : </span>
                    </div>

                    <span className="font-medium">
                      {formatRupiah(Number(value))}
                    </span>
                  </div>
                );
              }}
            />
          }
        />

        <Line
          dataKey="value"
          type="monotone"
          stroke="var(--color-value)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
