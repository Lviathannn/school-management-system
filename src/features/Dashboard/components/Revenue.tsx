"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatRupiah } from "@/lib/format";

const chartData = [
  { month: "Januari", income: 186000, outcome: 80000 },
  { month: "Februari", income: 305000, outcome: 200000 },
  { month: "Maret", income: 237000, outcome: 120000 },
  { month: "April", income: 73000, outcome: 190000 },
  { month: "Mei", income: 209000, outcome: 130000 },
  { month: "Juni", income: 214000, outcome: 140000 },
  { month: "Juli", income: 240000, outcome: 150000 },
  { month: "Agustus", income: 260000, outcome: 160000 },
  { month: "September", income: 280000, outcome: 170000 },
  { month: "Oktober", income: 300000, outcome: 180000 },
  { month: "November", income: 320000, outcome: 190000 },
  { month: "Desember", income: 340000, outcome: 200000 },
];

const chartConfig = {
  income: {
    label: "Pendapatan",
    color: "#2563eb",
  },
  outcome: {
    label: "Pengeluaran",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function Revenue() {
  return (
    <ChartContainer
      config={chartConfig}
      className="max-h-[400px] min-h-[400px] w-full"
    >
      <BarChart accessibilityLayer data={chartData}>
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />

        <ChartTooltip
          content={
            <ChartTooltipContent
              indicator="dot"
              formatter={(value, name, item) => {
                return (
                  <div className="flex gap-3">
                    <div className="flex gap-2 items-center">
                      <span
                        className="inline-block w-2 h-2 rounded-[2px]"
                        style={{ backgroundColor: item.color }}
                      />

                      <span className="capitalize">
                        {name === "income" ? "Pendapatan :" : "Pengeluaran :"}
                      </span>
                    </div>

                    <span className="font-medium">
                      {formatRupiah(Number(value))}
                    </span>
                  </div>
                );
              }}
            />
          }
          cursor
        />

        <CartesianGrid vertical={false} />

        <Bar dataKey="income" fill="var(--color-income)" radius={5} />

        <Bar dataKey="outcome" fill="var(--color-outcome)" radius={5} />

        <ChartLegend content={<ChartLegendContent />} />
      </BarChart>
    </ChartContainer>
  );
}
