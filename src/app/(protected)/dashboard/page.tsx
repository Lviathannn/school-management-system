import { Header } from "@/components/Header";
import { dashboardStat, studentsPerformance } from "@/constant";
import {
  BestStudent,
  DashboardCard,
  GenderStat,
  Revenue,
  SavingChart,
} from "@/features/Dashboard";
import { CalendarDemo } from "@/features/Dashboard/components/Calendar";
import { Schedule } from "@/features/Dashboard/components/Schedule";
import {
  HandCoinsIcon,
  TrendingUpIcon,
  TrophyIcon,
  UserRound,
} from "lucide-react";

export default function Home() {
  return (
    <main className="p-5 pl-[76px] py-10 min-h-screen grid grid-cols-4 gap-5 pt-[85px] grid-rows-2">
      <section className="col-span-3 flex flex-col gap-5 row-span-2">
        <div className="grid grid-cols-3 gap-5 w-full">
          {dashboardStat.map((stat) => (
            <DashboardCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </div>

        <div className="w-full bg-white p-5 shadow_card rounded-2xl space-y-10 h-full flex flex-col justify-between">
          <Header
            title="Pendapatan & Pengeluaran"
            subtitle="Dalam 1 Tahun"
            icon={
              <TrendingUpIcon size={24} strokeWidth={1.5} color="#ffffff" />
            }
            color="#0ea5e9 "
          />

          <div className="max-h-[400px]">
            <Revenue />
          </div>
        </div>
      </section>

      <section className="h-full w-full bg-white rounded-2xl p-5 shadow_card row-span-2 space-y-5">
        <CalendarDemo />

        <Schedule />
      </section>

      <section className="h-full w-full bg-white rounded-2xl p-5 flex flex-col gap-5 row-start-3 col-start-1">
        <Header
          title="Murid Berprestasi"
          subtitle="Dalam 1 Semester"
          icon={<TrophyIcon size={24} strokeWidth={1.5} color="#ffffff" />}
          color="#facc15 "
        />

        <div className="flex flex-col gap-2">
          {studentsPerformance.map((student) => (
            <BestStudent
              name={student.name}
              studentClass={student.class}
              gender={student.gender}
              star={student.star}
              key={student.name}
            />
          ))}
        </div>
      </section>

      <section className="h-full w-full bg-white rounded-2xl p-5 flex flex-col gap-5 col-start-2 row-start-3">
        <Header
          title="Perbandingan Murid"
          subtitle="Dalam 1 Semester"
          icon={<UserRound size={24} strokeWidth={1.5} color="#ffffff" />}
          color="#10b981 "
        />

        <div className="flex justify-center items-center h-full">
          <GenderStat />
        </div>
      </section>

      <section className="col-span-2 flex flex-col gap-5">
        <div className="w-full bg-white p-5 shadow_card rounded-2xl space-y-10 h-full flex flex-col justify-between">
          <Header
            title="Tabungan"
            subtitle="Dalam 1 Tahun"
            icon={<HandCoinsIcon size={24} strokeWidth={1.5} color="#ffffff" />}
            color="#f97316"
          />

          <div className="max-h-[300px]">
            <SavingChart />
          </div>
        </div>
      </section>
    </main>
  );
}
