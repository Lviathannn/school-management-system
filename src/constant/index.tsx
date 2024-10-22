import { BackpackIcon, GraduationCapIcon, LandmarkIcon } from "lucide-react";

export const bgColors = {
  Murid: "#5D5FEF",
  Guru: "#2563EB",
  Tabungan: "#FA5A7D",
};

export const icons = {
  Murid: <BackpackIcon size={24} strokeWidth={1.5} color="#ffffff" />,
  Guru: <GraduationCapIcon size={24} strokeWidth={1.5} color="#ffffff" />,
  Tabungan: <LandmarkIcon size={24} strokeWidth={1.5} color="#ffffff" />,
};

export const dashboardStat = [
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

export const studentsPerformance = [
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

export const schedule = [
  {
    title: "Pawai 17 Agustus",
    type: "kegiatan",
    date: "2021-08-17",
  },
  {
    title: "Hari Raya Idul Adha",
    type: "libur",
    date: "2021-07-20",
  },
  {
    title: "Kegiatan Trip ke Pantai",
    type: "kegiatan",
    date: "2021-05-13",
  },
  {
    title: "Hari Natal",
    date: "2021-12-25",
    type: "libur",
  },
];
