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
    <main className="grid min-h-screen grid-cols-4 grid-rows-2 gap-5 p-10 pl-[86px] pt-[85px]">
      <section className="col-span-3 row-span-2 flex flex-col gap-5">
        <div className="grid w-full grid-cols-3 gap-5">
          {dashboardStat.map((stat) => (
            <DashboardCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </div>

        <div className="shadow_card flex h-full w-full flex-col justify-between space-y-10 rounded-2xl bg-white p-5">
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

      <section className="shadow_card row-span-2 h-full w-full space-y-5 rounded-2xl bg-white p-5">
        <CalendarDemo />

        <Schedule />
      </section>

      <section className="col-start-1 row-start-3 flex h-full w-full flex-col gap-5 rounded-2xl bg-white p-5">
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

      <section className="col-start-2 row-start-3 flex h-full w-full flex-col gap-5 rounded-2xl bg-white p-5">
        <Header
          title="Perbandingan Murid"
          subtitle="Dalam 1 Semester"
          icon={<UserRound size={24} strokeWidth={1.5} color="#ffffff" />}
          color="#10b981 "
        />

        <div className="flex h-full items-center justify-center">
          <GenderStat />
        </div>
      </section>

      <section className="col-span-2 flex flex-col gap-5">
        <div className="shadow_card flex h-full w-full flex-col justify-between space-y-10 rounded-2xl bg-white p-5">
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
