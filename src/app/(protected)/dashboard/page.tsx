import { GenderStat, Revenue } from "@/features/Dashboard";
import {
  BackpackIcon,
  DollarSign,
  GraduationCapIcon,
  HandCoinsIcon,
  LandmarkIcon,
  StarIcon,
  TrophyIcon,
  UserRound,
} from "lucide-react";
import Image from "next/image";

const dashboardStat = [
  {
    title: "Murid",
    value: 100,
  },

  {
    title: "Guru",
    value: 5,
  },
  {
    title: "Tabungan",
    value: 20000000,
  },
];

const bgColors = {
  Murid: "#5D5FEF",
  Guru: "#1D4ED8",
  Tabungan: "#FA5A7D",
};

const icons = {
  Murid: <BackpackIcon size={24} strokeWidth={1.5} color="#ffffff" />,
  Guru: <GraduationCapIcon size={24} strokeWidth={1.5} color="#ffffff" />,
  Tabungan: <HandCoinsIcon size={24} strokeWidth={1.5} color="#ffffff" />,
};

const studentsPerformance = [
  {
    name: "Ade",
    class: "B",
    gender: "Laki-laki",
    star: 8,
  },
  {
    name: "Budi",
    class: "A",
    gender: "Laki-laki",
    star: 9,
  },
  {
    name: "Caca",
    class: "A",
    gender: "Perempuan",
    star: 8,
  },
  {
    name: "Fina",
    class: "A",
    gender: "Perempuan",
    star: 7,
  },
];

export default function Home() {
  return (
    <main className="p-5 pl-[76px] py-10 min-h-screen grid grid-cols-4 gap-5 pt-[85px] grid-rows-2">
      <section className="col-span-3 flex flex-col gap-5 row-span-2">
        <div className="grid grid-cols-3 gap-5 w-full">
          {dashboardStat.map((stat) => (
            <div
              className="bg-white h-48 p-5 rounded-2xl flex flex-col justify-between shadow_card"
              key={stat.title}
            >
              <div className="flex items-center gap-5">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    // @ts-ignore
                    backgroundColor: bgColors[stat.title],
                  }}
                >
                  {/* @ts-ignore */}
                  {icons[stat.title]}
                </div>

                <h3 className="text-lg font-semibold">Total {stat.title}</h3>
              </div>

              <div className="">
                <h2 className="text-4xl font-bold text-slate-800">
                  {stat.value}
                </h2>

                <p className="text-lg font-medium text-slate-500">
                  Total {stat.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full bg-white p-5 shadow_card rounded-2xl space-y-10 h-full flex flex-col justify-between">
          <div className="flex items-center gap-5">
            <div className="p-2 rounded-lg bg-sky-500">
              <LandmarkIcon size={24} strokeWidth={1.5} color="#ffffff" />
            </div>

            <h2 className="text-lg font-semibold">Pendapatan & Pengeluran</h2>
          </div>

          <Revenue />
        </div>
      </section>

      <section className="h-full w-full bg-white rounded-2xl p-5 flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <div className="p-2 rounded-lg bg-emerald-500">
            <UserRound size={24} strokeWidth={1.5} color="#ffffff" />
          </div>

          <h2 className="text-lg font-semibold">Perbandingan Murid</h2>
        </div>

        <div className="flex justify-center items-center h-full">
          <GenderStat />
        </div>
      </section>

      <section className="h-full w-full bg-white rounded-2xl p-5 flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <div className="p-2 rounded-lg bg-yellow-400">
            <TrophyIcon size={24} strokeWidth={1.5} color="#ffffff" />
          </div>

          <h2 className="text-lg font-semibold">Murid Berprestasi</h2>
        </div>

        <div className="flex flex-col gap-2">
          {studentsPerformance.map((student) => (
            <div
              className="rounded-lg p-[10px] flex bg-gray-50 justify-between items-center"
              key={student.name}
            >
              <div className="flex gap-2">
                <div
                  className="flex justify-center items-end w-10 h-10 rounded-full overflow-hidden"
                  style={{
                    backgroundColor:
                      student.gender === "Perempuan" ? "#FFC0CB" : "#87CEEB",
                  }}
                >
                  <Image
                    src={
                      student.gender === "Perempuan" ? "/girl.png" : "/boy.png"
                    }
                    alt="student picture"
                    width={32}
                    height={32}
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-lg font-medium text-slate-700 leading-6">
                    {student.name}
                  </span>

                  <span className="text-xs text-slate-400">
                    Kelas {student.class}
                  </span>
                </div>
              </div>

              <div className="w-10 flex justify-evenly items-center">
                <span className="text-sm">{student.star}</span>

                <StarIcon
                  fill="#FACC15"
                  size={16}
                  strokeWidth={1.5}
                  color="#FACC15"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
