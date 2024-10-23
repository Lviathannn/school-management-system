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
    <main className="grid min-h-screen grid-cols-4 grid-rows-2 gap-5 bg-gray-50 px-4 pb-10 pt-[88px] md:px-10 md:pl-[86px]">
      <section className="col-span-4 row-span-2 flex flex-col gap-5 2xl:col-span-3">
        <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      <section className="shadow_card col-span-4 row-span-2 flex h-full w-full flex-col items-center justify-center gap-10 rounded-2xl bg-white p-5 md:flex-row 2xl:col-span-1 2xl:flex-col 2xl:justify-start">
        <CalendarDemo />

        <Schedule />
      </section>

      <section className="shadow_card col-span-4 flex h-full w-full flex-col gap-5 rounded-2xl bg-white p-5 md:col-span-2 2xl:col-span-1 2xl:col-start-1 2xl:row-start-3">
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

      <section className="shadow_card col-span-4 flex h-full w-full flex-col gap-5 rounded-2xl bg-white p-5 md:col-span-2 2xl:col-span-1 2xl:col-start-2 2xl:row-start-3">
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

      <section className="col-span-4 flex flex-col gap-5 2xl:col-span-2">
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
