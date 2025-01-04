import { Header } from "@/components/Header";
import { bgColors, icons } from "@/constant";
import { formatRupiah } from "@/lib/format";

type Props = {
  title: string;
  value: number;
};

export function DashboardCard({ title, value }: Props) {
  const cardValue = title === "Tabungan" ? formatRupiah(value) : value;

  return (
    <div className="bg-white h-48 p-5 rounded-2xl flex flex-col justify-between shadow_card">
      <Header
        title={title}
        color={
          //@ts-ignore
          bgColors[title]
        }
        icon={
          //@ts-ignore
          icons[title]
        }
        subtitle="Dalam 1 Semester"
      />

      <div className="">
        <h2 className="text-2xl font-bold text-slate-800">{cardValue}</h2>

        <p className="text-slate-500">Total {title}</p>
      </div>
    </div>
  );
}
