import { TStudent } from "@/features/student";
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

export const studentData: TStudent[] = [
  {
    id: "728ed52fd",
    nik: 320718011001,
    name: "Athiya Rizky Adzkiya",
    parent: "Arifin",
    parentContact: "08123456789",
    birthDate: new Date(),
    birtLocation: "Lampung",
    address: "Jl. Raya Kalianda",
    class: "B",
    gender: "Perempuan",
  },
  {
    id: "728ed52fs",
    nik: 320718011001,
    name: "Leviathan Envy",
    parent: "Anwar",
    parentContact: "08123456789",
    birthDate: new Date(),
    birtLocation: "Ciamis",
    address: "Ponpes Darul Ulum",
    class: "A",
    gender: "Laki laki",
  },
  {
    id: "728ed52fa",
    nik: 320718011001,
    name: "Athika Tsary Adzkiya",
    birtLocation: "Lampung",
    address:
      "Jl. Raya Kalianda No. 1 RT 01 RW 01 Kalianda lorem  ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    birthDate: new Date(),
    parentContact: "08123456789",
    parent: "Arifin",
    class: "B",
    gender: "Perempuan",
  },
  {
    id: "728ed52fv",
    nik: 320718011001,
    name: "Muhammad Asrul",
    birthDate: new Date(),
    birtLocation: "Ciamis",
    address: "Ponpes Darul Ulum",
    parent: "Anwar",
    parentContact: "08123456789",
    class: "A",
    gender: "Laki laki",
  },
];
